"use client";

import { useState } from "react";
import SendMail from "./SendMail";
import { XIcon } from "lucide-react";
import Modal from "./ui/Modal";

const TakeDiscount = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full text-xs text-neutral-50 md:rounded-b-2xl bg-amber-700 hover:bg-amber-800 transition-colors duration-300 py-1 md:py-2 px-3 cursor-pointer"
      >
        Получить скидку
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Подпишитесь на рассылку</h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-neutral-500 hover:text-amber-700 transition-colors"
              aria-label="Закрыть"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <SendMail className="hover:bg-black dark:hover:bg-white hover:text-white" />
          <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
            Получите 10% скидку на первый заказ
          </p>
        </div>
      </Modal>
    </>
  );
};
export default TakeDiscount;
