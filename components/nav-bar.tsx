"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { Menu, User, BookOpen, MessageCircle, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 导航栏动画
  const navSpring = useSpring({
    transform: scrollY > 50 ? "translateY(-100%)" : "translateY(0%)",
    opacity: scrollY > 50 ? 0 : 1,
    config: { tension: 200, friction: 20 },
    immediate: false,
  });

  // 头像动画
  const avatarSpring = useSpring({
    transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
    config: { tension: 300, friction: 10 },
  });

  const navItems = [
    { 
      href: "/", 
      label: "关于我",
      icon: User,
      color: "text-blue-500"
    },
    { 
      href: "/blog", 
      label: "博客",
      icon: BookOpen,
      color: "text-green-500"
    },
    { 
      href: "/guestbook", 
      label: "留言板",
      icon: MessageSquare,
      color: "text-yellow-500"
    },
    { 
      href: "/contact", 
      label: "联系我",
      icon: MessageCircle,
      color: "text-purple-500"
    }
  ];

  return (
    <animated.header 
      style={navSpring}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            {/* 头像 */}
            <animated.div 
              style={avatarSpring}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="/">
                <Image
                  src="/assets/myav.jpg"
                  alt="Avatar"
                  width={36}
                  height={36}
                  className="rounded-full ring-2 ring-primary/20 hover:ring-primary/60 transition-all duration-300"
                  priority
                />
              </Link>
            </animated.div>

            {/* 移动端下拉菜单 */}
            <div className="relative sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Menu className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">菜单</span>
              </button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-40 py-2 bg-background/95 backdrop-blur-lg rounded-xl border shadow-lg"
                  >
                    {navItems.map(({ href, label, icon: Icon, color }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                          pathname === href
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${color}`} />
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 桌面端导航 */}
            <div className="hidden sm:flex items-center space-x-8">
              <AnimatePresence mode="wait">
                {navItems.map(({ href, label }) => (
                  <motion.div
                    key={href}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={href}
                      className={`relative text-base font-medium transition-colors group ${
                        pathname === href 
                          ? 'text-primary' 
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {label}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: pathname === href ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div className="absolute -inset-x-2 -inset-y-1 bg-primary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </div>
    </animated.header>
  );
} 