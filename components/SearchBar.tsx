"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchResult } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { apiRoutes } from "@/lib/api";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const { push } = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await fetch(
          `${apiRoutes.search}?q=${encodeURIComponent(query)}`,
          {
            next: { revalidate: 60 },
          }
        );
        const data = await response.json();
        setResults(data);
        setIsOpen(true);
      } catch (error) {
        console.error(error);
        throw new Error("Ошибка при поиске");
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSearchClick = () => {
    if (query.trim() !== "") {
      setIsOpen(false);
      setResults([]);
      setQuery("");

      push(`search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleResultClick = (productId: number) => {
    push(`/product/${productId}`);

    setIsOpen(false);
    setResults([]);
    setQuery("");
  };

  return (
    <div className="w-full md:max-w-2xl relative" ref={searchRef}>
      <div className="flex items-center gap-x-2">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск..."
          className={"flex-1"}
          onFocus={() => setIsOpen(true)}
        />
        <Button
          className="cursor-pointer md:block hidden"
          onClick={handleSearchClick}
        >
          Найти
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 dark:bg-neutral-800 bg-neutral-50 rounded-lg shadow-lg mt-2 z-10"
          >
            <ul className="py-2 space-y-3 px-2">
              {results.map((result) => (
                <motion.li
                  key={result.id}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-2 h-15 md:h-20 dark:hover:bg-neutral-700 hover:bg-neutral-200 rounded-lg transition-all duration-300 flex items-center justify-between cursor-pointer border dark:border-neutral-600"
                  onClick={() => handleResultClick(result.id)}
                >
                  <div>
                    <h3 className="font-semibold">{result.name}</h3>
                    <p className="text-sm text-neutral-400">
                      {result.category}
                    </p>
                  </div>
                  <div className="relative w-12 h-12 md:w-15 md:h-15 shrink-0">
                    <Image
                      src={result.imageUrl}
                      alt={result.name}
                      fill
                      sizes="(max-width: 640px) 15vw, 5vw"
                      className="rounded-sm object-cover"
                      loading="lazy"
                      decoding="async"
                      quality={75}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default SearchBar;
