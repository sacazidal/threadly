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
          `${apiRoutes.search}?q=${encodeURIComponent(query)}`
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-neutral-800 rounded-lg shadow-lg mt-2 z-10"
          >
            <ul className="py-2 px-2">
              {results.map((result) => (
                <motion.li
                  key={result.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-2 hover:bg-neutral-700 rounded-lg transition-all duration-300 flex items-center justify-between cursor-pointer border border-neutral-600"
                  onClick={() => handleResultClick(result.id)}
                >
                  <div>
                    <h3 className="font-semibold">{result.name}</h3>
                    <p className="text-sm text-neutral-400">
                      {result.category}
                    </p>
                  </div>
                  <Image
                    src={result.imageUrl}
                    alt={result.name}
                    width={40}
                    height={40}
                    className="rounded-sm"
                  />
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
