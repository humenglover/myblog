"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const quotes = [
  { text: "生活不止眼前的代码，还有诗和远方。", author: "星期一" },
  { text: "用镜头定格美好，用代码构建未来。", author: "星期二" },
  { text: "既要仰望星空，也要脚踏实地。", author: "星期三" },
  { text: "编程是一门艺术，摄影是另一种表达。", author: "星期四" },
  { text: "保持热爱，奔赴山海。", author: "星期五" },
  { text: "让技术与艺术在这里相遇。", author: "星期六" },
  { text: "静心编码，悦享生活。", author: "星期日" },
];

export function DailyQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const day = new Date().getDay();
    setQuote(quotes[day === 0 ? 6 : day - 1]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg font-medium mb-2"
        >
          今日格言
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          {quote.text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.8 + index * 0.05,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xs text-muted-foreground mt-2"
        >
          {quote.author}
        </motion.p>
      </motion.div>
    </div>
  );
} 