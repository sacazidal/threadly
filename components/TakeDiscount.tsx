"use client";

import { useEffect, useRef, useState } from "react";
import SendMail from "./SendMail";
import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TakeDiscount = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.addEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 300 },
    },
    exit: {
      y: 50,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <button
        onClick={handleModalOpen}
        className="w-full text-xs text-neutral-50 md:rounded-b-2xl bg-amber-700 hover:bg-amber-800 transition-colors duration-300 py-1 md:py-2 px-3 cursor-pointer"
      >
        Получить скидку
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              variants={backdropVariants}
              onClick={handleModalClose}
            />
            <motion.div
              ref={modalRef}
              className="relative bg-white dark:bg-neutral-800 rounded-lg max-w-md w-full shadow-xl mx-auto z-10"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">
                    Подпишитесь на рассылку
                  </h3>
                  <button
                    onClick={handleModalClose}
                    className="text-neutral-500 hover:text-amber-700 transition-colors"
                    aria-label="Закрыть"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                <SendMail />
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                  Получите 10% скидку на первый заказ
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default TakeDiscount;
