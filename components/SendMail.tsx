"use client";

import { CheckIcon, MailIcon, XIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { apiRoutes } from "@/lib/api";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { validateEmail } from "@/utils/validation";

const SendMail = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [lastRequestTime, setLastRequestTime] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSendMail = async () => {
    if (validateEmail(email)) {
      setStatus("error");
      return;
    }

    const now = Date.now();
    if (now - lastRequestTime < 5000) {
      setStatus("error");
      return;
    }

    setLastRequestTime(now);
    setStatus("loading");

    try {
      const response = await fetch(apiRoutes.sendEmail, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMail();
    }
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative flex-1">
        <Input
          type="email"
          placeholder="Ваш email"
          value={email}
          autoComplete="on"
          onChange={(e) => {
            setEmail(e.target.value);
            setIsTyping(true);
            if (status === "error" && isTyping) {
              setStatus("idle");
            }
          }}
          onKeyDown={handleKeyDown}
          className={cn(
            "px-2 lg:px-3 py-1 placeholder:text-xs lg:placeholder:text-sm lg:py-2 text-sm",
            "focus:outline-none focus:ring-1 focus:ring-primary-500 w-full",
            status === "error" ? "border-red-500" : "",
            status === "success" ? "border-green-500" : ""
          )}
          disabled={status === "loading"}
        />
        {status === "success" && (
          <CheckIcon className="h-4 w-4 text-green-500 absolute right-3 top-1/2 -translate-y-1/2" />
        )}
        {status === "error" && (
          <XIcon className="h-4 w-4 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
        )}
      </div>

      <Button
        onClick={handleSendMail}
        disabled={status === "loading"}
        className={`px-3 py-2 ${className}`}
        variant="ghostFooter"
      >
        {status === "loading" ? (
          <div className="h-4 w-4 border-2 rounded-full animate-spin" />
        ) : (
          <MailIcon className="h-4 w-4" />
        )}
        <span className="sr-only">Отправить</span>
      </Button>
    </div>
  );
};
export default SendMail;
