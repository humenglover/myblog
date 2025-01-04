"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const characters = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  return (
    <div className={cn("font-mono", className)}>
      {characters.map((word, idx) => {
        return (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((character, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: (idx + index) * 0.1,
                }}
                key={index}
                className={cn("dark:text-white text-black", word.className)}
              >
                {character}
              </motion.span>
            ))}
            &nbsp;
          </div>
        );
      })}
    </div>
  );
}; 