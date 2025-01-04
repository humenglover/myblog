"use client";

import { motion } from "framer-motion";
import ContactContent from "@/components/contact/contact-content";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <ContactContent />
    </motion.div>
  );
} 