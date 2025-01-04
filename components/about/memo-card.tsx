"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Star, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';
import {
  Expandable,
  ExpandableCard,
  ExpandableCardContent,
  ExpandableCardFooter,
  ExpandableCardHeader,
  ExpandableContent,
  ExpandableTrigger,
} from "@/components/ui/expandable";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

type Priority = 'high' | 'medium' | 'low';

interface Memo {
  text: string;
  date: string;
  status: string;
  priority: Priority;
  action: () => void;
}

export function MemoCard() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOverlapping, setIsOverlapping] = useState(false);
  const [isUserExpanded, setIsUserExpanded] = useState(true);
  const memoRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const welcomeMessages = [
    {
      text: "欢迎来到我的个人网站",
      date: new Date().toLocaleDateString(),
      status: "欢迎",
      priority: "high" as Priority,
      action: () => window.location.reload()
    },
    {
      text: "希望你能在这里找到有趣的东西",
      date: new Date().toLocaleDateString(),
      status: "探索",
      priority: "medium" as Priority,
      action: () => router.push('/blog')
    },
    {
      text: "有任何问题都可以联系我",
      date: new Date().toLocaleDateString(),
      status: "交流",
      priority: "low" as Priority,
      action: () => router.push('/contact')
    }
  ];

  const priorityColors: Record<Priority, string> = {
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
    low: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100"
  } as const;

  useEffect(() => {
    const checkOverlap = () => {
      if (!memoRef.current) return;
      
      const mainContent = document.querySelector('main');
      if (!mainContent) return;

      const memoRect = memoRef.current.getBoundingClientRect();
      const mainRect = mainContent.getBoundingClientRect();

      const isOverlap = !(
        memoRect.right < mainRect.left ||
        memoRect.left > mainRect.right ||
        memoRect.bottom < mainRect.top ||
        memoRect.top > mainRect.bottom
      );

      setIsOverlapping(isOverlap);
      if (isOverlap && !isUserExpanded) {
        setIsCollapsed(true);
      }
    };

    checkOverlap();
    window.addEventListener('scroll', checkOverlap);
    window.addEventListener('resize', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
      window.removeEventListener('resize', checkOverlap);
    };
  }, [isUserExpanded]);

  const handleToggle = () => {
    if (isOverlapping) {
      setIsUserExpanded(!isUserExpanded);
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={memoRef}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="hidden lg:block fixed right-0 top-32 z-10"
        >
          <Expandable
            expandDirection="vertical"
            expandBehavior="replace"
            initialDelay={0.2}
          >
            {({ isExpanded }) => (
              <ExpandableTrigger>
                <ExpandableCard
                 
                  collapsedSize={{ 
                    width: isCollapsed ? 130 : 256, 
                    height: isCollapsed ? 48 : 180 
                  }}
                  expandedSize={{ 
                    width: isCollapsed ? 120 : 256, 
                    height: isCollapsed ? 48 : 320 
                  }}
                  hoverToExpand={!isCollapsed}
                >
                  {isOverlapping && (
                    <button
                      onClick={handleToggle}
                      className="absolute top-2 -right-4 p-2.5 rounded-full hover:bg-white/10 transition-colors z-50"
                    >
                      <motion.div
                        animate={{ rotate: isCollapsed ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight size={40} className="text-primary/60" />
                      </motion.div>
                    </button>
                  )}

                  {isCollapsed ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex items-center justify-center"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <BookOpen className="w-5 h-5 text-primary/60" />
                        <span className="text-sm">
                          站长有话说
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <ExpandableCardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-base font-semibold flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-primary/60" />
                            站长说
                          </h3>
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Star className="w-3 h-3 text-yellow-500/60" />
                          </motion.div>
                        </div>
                      </ExpandableCardHeader>

                      <ExpandableCardContent>
                        <div className="space-y-3">
                          {welcomeMessages.map((message, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 
                                transition-all duration-300 group relative overflow-hidden cursor-pointer"
                              onClick={message.action}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium group-hover:text-primary transition-colors">
                                  <Typewriter
                                    options={{
                                      strings: [message.text],
                                      autoStart: true,
                                      loop: false,
                                      delay: 30,
                                      cursor: "",
                                      deleteSpeed: Infinity,
                                      wrapperClassName: "text-xs font-medium",
                                    }}
                                  />
                                </span>
                                <Badge variant="secondary" className={priorityColors[message.priority]}>
                                  {message.status}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{message.date}</span>
                              </div>
                              <ExpandableContent preset="fade">
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                  initial={{ x: "-100%" }}
                                  animate={{ x: "100%" }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "linear",
                                  }}
                                />
                              </ExpandableContent>
                            </motion.div>
                          ))}
                        </div>
                      </ExpandableCardContent>

                      <ExpandableCardFooter>
                        <ExpandableContent preset="slide-up">
                          <p className="text-xs text-muted-foreground">
                            上次更新: 好久前
                          </p>
                        </ExpandableContent>
                      </ExpandableCardFooter>
                    </>
                  )}
                </ExpandableCard>
              </ExpandableTrigger>
            )}
          </Expandable>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 