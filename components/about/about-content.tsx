"use client";

import { useScroll, useTransform } from "framer-motion";
import { Code2, Camera, Brain, Coffee, Github, Twitter, Mail, BookOpen, Cloud, Rocket, Star, Server, Database, Laptop, Code, Shield, Braces, MonitorSmartphone, FileCode, Layout, Globe, Music, FileText, Users, Activity } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import * as Progress from '@radix-ui/react-progress';
import { ProgressBar } from "@tremor/react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import {  AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import VanillaTilt from 'vanilla-tilt';
import dynamic from 'next/dynamic';
import { MemoCard } from "./memo-card";  // 添加导入
// import ThreeDPhotoCarousel from "@/components/ui/photo-carousel";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Meteors } from "@/components/ui/meteors";
import { motion } from "framer-motion";
// import Clock3D from "@/components/ui/clock-component";

// 改用动态导入
const Clock3D = dynamic(() => import('@/components/ui/clock-component'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-primary/10 rounded-lg w-full h-[200px]" />
});

const ThreeDPhotoCarousel = dynamic(() => import('@/components/ui/photo-carousel'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-primary/10 rounded-lg w-full h-[200px]" />
});
const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/humenglover",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:109484028@qq.com",
    label: "Email",
  },
  {
    icon: Globe,
    href: "https://lumenglover.com",
    label: "Website",
  },
];

const techStacks = [
  {
    category: "后端技术",
    items: [
      "Java & Spring Boot",
      "微服务架构",
      "MySQL & Redis",

    ]
  },
  {
    category: "前端技术",
    items: [
      "React & Vue",
      "TypeScript",
      "Next.js",
    ]
  },
  {
    category: "运维技术",
    items: [
      "Linux & Shell",
      "AWS & 阿里云",
      "Docker & K8s",
    ]
  }
];

const features = [
  {
    Icon: Camera,
    name: "摄影创作",
    description: "捕捉生活中的美好瞬间",
    className: "col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-20" />
    ),
    content: (
      <div className="flex flex-col ">

        
        {/* 3D 轮播图 */}
        <div className="w-full ">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    ),
  },
 
  {
    Icon: Coffee,
    name: "生活态度",
    description: "享受编程与生活的平衡",
    className: "col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20" />
    ),
    content: (
      <div className="mb-auto pb-6">
        <p className="text-sm text-muted-foreground mb-8">
          相信工作与生活的平衡，在编程之余，享受摄影创作带来的乐趣，
          通过镜头记录生活中的美好瞬间。
        </p>
      </div>
    ),
  },
  {
    Icon: Code2,
    name: "全栈开发",
    description: "专注于构建高质量的全栈应用",
    className: "col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 opacity-20" />
    ),
    content: (
      <div className="mb-auto pb-6">
        <div className="flex gap-8 h-32">
          {/* 技术栈 */}
          <div className="flex-1">
            <Marquee className="h-full [--duration:30s]" pauseOnHover>
              {techStacks.map((stack, idx) => (
                <div 
                  key={idx}
                  className="mx-4 flex flex-col items-center p-3 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-lg w-[160px] group hover:bg-white/30 dark:hover:bg-white/20 transition-colors border border-white/10"
                >
                  <h4 className="font-semibold text-primary mb-2 truncate w-full text-center text-sm">
                    {stack.category}
                  </h4>
                  <ul className="space-y-1.5 w-full">
                    {stack.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="text-xs text-primary/90 dark:text-primary/80 group-hover:text-primary transition-colors truncate text-center"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Marquee>
          </div>

          {/* 右侧时钟 */}
          <div className="w-32 shrink-0 flex flex-col items-center justify-center">
            <ClockComponent />
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Brain,
    name: "终身学习",
    description: "保持对新技术的探索热情",
    className: "col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-20" />
    ),
    content: (
      <div className="mb-auto pb-6">
        <Marquee className="h-32 mb-8" pauseOnHover>
          {[
            { 
              icon: BookOpen,
              text: "人工智能",
              color: "from-blue-500/20 to-indigo-500/20"
            },
            { 
              icon: Brain,
              text: "机器学习",
              color: "from-purple-500/20 to-pink-500/20"
            },
            { 
              icon: Cloud,
              text: "云原生",
              color: "from-cyan-500/20 to-teal-500/20"
            },
            { 
              icon: Rocket,
              text: "Web3",
              color: "from-orange-500/20 to-amber-500/20"
            },
            { 
              icon: Star,
              text: "区块链",
              color: "from-rose-500/20 to-red-500/20"
            },
            { 
              icon: Server,
              text: "微服务",
              color: "from-green-500/20 to-emerald-500/20"
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="mx-2 p-4 bg-white/25 backdrop-blur-sm rounded-lg min-w-[120px] group hover:bg-white/30 transition-all duration-300 flex flex-col items-center gap-3"
            >
              <div className={`p-3 rounded-full bg-gradient-to-br ${item.color}`}>
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">
                {item.text}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    ),
  },
];

const experiences = [
  {
    year: "2024",
    title: "全栈工程师",
    description: "专注于构建现代化 Web 应用",
    progress: 100,
    skills: [
      { name: "Next.js", progress: 30 },
      { name: "React", progress: 50 },
      { name: "Node.js", progress: 20 },
    ]
  },
  {
    year: "2023",
    title: "开源参与者",
    description: "参与开源项目的开发",
    progress: 75,
    skills: [
      { name: "TypeScript", progress: 25 },
      { name: "Spring Boot", progress: 55 },
      { name: "Docker", progress: 30 },
    ]
  },
  {
    year: "2022",
    title: "后端开发",
    description: "专注于微服务架构设计与实现",
    progress: 50,
    skills: [
      { name: "Java", progress: 40 },
      { name: "MySQL", progress: 30 },
      { name: "Redis", progress: 30 },
    ]
  }
];

function ClockComponent() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative p-4 rounded-lg bg-gradient-to-br from-violet-500/10 to-indigo-500/10 backdrop-blur-sm">
      <Clock
        value={value}
        size={200}
        renderNumbers={true}
        className="[&_.react-clock__hand]:bg-primary [&_.react-clock__second-hand]:bg-red-500 [&_.react-clock__face]:border-primary [&_.react-clock__mark]:bg-primary dark:[&_.react-clock__face]:border-white/80 dark:[&_.react-clock__mark]:bg-white/80"
      />
    </div>
  );
}

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: ["#FF69B4", "#4169E1", "#7B68EE", "#00FA9A", "#FFA500"]
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.8,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.6,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.8
              }
            }
          }
        }
      }}
    />
  );
}

const AnimatedCard = motion.div;

function TimeDisplay({ value }: { value: Date }) {
  // 数字弹跳动画
  const springProps = useSpring({
    from: { scale: 1 },
    to: { scale: 1.1 },
    reset: true,
    reverse: true,
    delay: 500,
    config: {
      tension: 300,
      friction: 10
    }
  });

  return (
    <div className="flex flex-col items-center md:items-start gap-3">
      {/* 数字时间 - 添加动画效果 */}
      <div className="text-4xl font-bold text-primary perspective flex">
        <AnimatePresence mode="wait">
          {value.toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }).split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 300
              }}
              className="inline-block"
            >
              {char === ':' ? (
                <animated.span
                  style={springProps}
                  className="inline-block text-primary/60"
                >
                  {char}
                </animated.span>
              ) : (
                <span className="hover:text-primary/80 transition-colors">
                  {char}
                </span>
              )}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* 日期信息 - 添加渐变和动画 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 hover:to-primary/80 transition-all duration-300"
      >
        {value.toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        })}
      </motion.div>

      {/* 状态指示器 - 添加脉冲动画 */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground/80 group">
        <motion.div 
          className="relative"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute -inset-1 bg-green-500/30 rounded-full animate-pulse"></div>
          <div className="relative w-2 h-2 rounded-full bg-green-500"></div>
        </motion.div>
        <span className="group-hover:text-primary transition-colors duration-300">
          北京时间
        </span>
      </div>
    </div>
  );
}

const FloatingPet = dynamic(
  () => import('@/components/ui/floating-pet').then(mod => mod.FloatingPet),
  { ssr: false }
);

// 在组件外部定义 timeAllocationData
const timeAllocationData = [
  {
    name: '学习课程',
    value: 35,
    icon: BookOpen,
    description: '专业课程、考试复习、知识积累',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: '编程开发',
    value: 20,
    icon: Code2,
    description: '个人项目、技术学习、实践创新',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: '课外活动',
    value: 15,
    icon: Rocket,
    description: '社团活动、志愿服务、校园活动',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    name: '运动健身',
    value: 10,
    icon: Activity,
    description: '跑步、健身、球类运动',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: '兴趣爱好',
    value: 10,
    icon: Music,
    description: '音乐、摄影、阅读',
    gradient: 'from-rose-500 to-red-500'
  },
  {
    name: '社交娱乐',
    value: 10,
    icon: Users,
    description: '朋友聚会、游戏、休闲放松',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function AboutContent() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full relative"
    >
      <ParticlesBackground />
      <FloatingPet />
      
      <div className="max-w-6xl mx-auto relative">
         {/* 全屏背景 */}
      <div className="fixed inset-0 -z-10">
        {/* 主渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
        
        {/* 装饰性渐变光晕 */}
        <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[128px]" />
        
        {/* 点状背景纹理 */}
        <div className="absolute inset-0 bg-dot-white/[0.1] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
        <motion.div 
          style={{ opacity, scale }}
          className="relative"
        >
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12 p-8 rounded-2xl bg-background/40 backdrop-blur-md border border-white/5">
            {/* 头像部分 */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="w-32 h-32 relative rounded-full overflow-hidden shrink-0 ring-2 ring-white/10 transition-all duration-300">
                <Image
                  src="/assets/myav.jpg"
                  alt="鹿梦"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* 头像悬停光效 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                />
              </div>
              {/* 微妙的光环效果 */}
              <div className="absolute -inset-1 bg-primary/5 rounded-full blur-md -z-10" />
            </motion.div>

            {/* 介绍内容 */}
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a 
                  href="https://lumenglover.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                  <h3 className="text-3xl font-bold mb-4 text-foreground/90 group-hover:text-primary transition-colors duration-300">
                    哈喽，我是鹿梦
                  </h3>
                </a>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="prose dark:prose-invert mb-6"
                >
                  <p className="text-lg leading-relaxed text-muted-foreground/90">
                    我相信生活的意义在于不断学习和探索新事物，我的目标是在自己的专业领域不断深耕，同时记录下生活中的美好瞬间。
                  </p>
                </motion.div>
              </motion.div>

              {/* 社交链接 */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-3"
              >
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-primary/10 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <AnimatedCard className="mb-12">
           <Clock3D />
        </AnimatedCard>

        

        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <AnimatedCard key={idx} className={feature.className}>
              <BentoCard {...feature} />
            </AnimatedCard>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-6 mb-12 mt-12">
          {[
            { 
              label: "项目经验", 
              value: "1年+",
              gradient: "from-blue-500/20 to-cyan-500/20",
              hoverGradient: "from-blue-500/30 to-cyan-500/30",
              icon: Code2,
              description: "全栈开发",
              className: "col-span-2 row-span-2",
            },
            { 
              label: "开源贡献", 
              value: "5+",
              gradient: "from-purple-500/20 to-pink-500/20",
              hoverGradient: "from-purple-500/30 to-pink-500/30",
              icon: Github,
              description: "Github",
              className: "col-span-2",
            },
            { 
              label: "技术文章", 
              value: "5+",
              gradient: "from-amber-500/20 to-orange-500/20",
              hoverGradient: "from-amber-500/30 to-orange-500/30",
              icon: FileText,
              description: "博客",
              className: "col-span-1",
            },
            { 
              label: "摄影作品", 
              value: "1+",
              gradient: "from-emerald-500/20 to-green-500/20",
              hoverGradient: "from-emerald-500/30 to-green-500/30",
              icon: Camera,
              description: "摄影",
              className: "col-span-1",
            },
          ].map(({ label, value, gradient, hoverGradient, icon: Icon, description, className }) => (
            <AnimatedCard key={label} className={className}>
              <div
                className={`relative h-full p-6 rounded-xl border border-white/10
                  backdrop-blur-md transition-all duration-500 group
                  hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1
                  bg-gradient-to-br ${gradient} hover:bg-gradient-to-br ${hoverGradient}`}
              >
                {/* 背景装饰 */}
                <div className="absolute inset-0 rounded-xl bg-grid-white/[0.02] bg-[size:20px]" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    {/* 图标 */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${gradient} opacity-30 
                        group-hover:opacity-50 transition-all duration-500 ring-1 ring-white/10`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    
                    {/* 数值 */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-4xl font-bold mb-2 bg-gradient-to-br from-foreground to-foreground/70 
                        bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500"
                    >
                      {value}
                    </motion.div>
                    
                    {/* 标签 */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-base font-medium text-muted-foreground group-hover:text-primary/80 
                        transition-colors text-center"
                    >
                      {label}
                    </motion.div>

                    {/* 描述文本 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-2 text-sm text-muted-foreground/60 group-hover:text-muted-foreground/80 
                        transition-colors text-center"
                    >
                      {description}
                    </motion.div>
                  </div>
                </div>

                {/* 悬停光效 */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                  transition-opacity duration-500 bg-gradient-to-br from-primary to-primary/50" />
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* 时间分配部分 */}
    <div className="relative z-20 mb-16 mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        {/* 装饰性背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl -z-10" />
        
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          时间分配
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {timeAllocationData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-background/40 backdrop-blur-md p-6 border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity shadow-lg`}>
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg tracking-tight">{item.name}</h3>
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent whitespace-nowrap group-hover:scale-110 transition-transform duration-300`}>
                  {item.value}%
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 h-2.5 rounded-full bg-background/50 overflow-hidden ring-1 ring-white/10">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${item.gradient} shadow-lg`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                />
              </div>

              {/* 悬停光效 */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

        <div className="mt-12 ">
          <h4 className="text-xl font-semibold mb-6">成长历程</h4>
          <div className="space-y-12 relative">
            <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-secondary" />
            
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="flex gap-4 items-start relative">
                  <div className="absolute left-[39px] top-0 bottom-0 w-[2px]">
                    <ProgressBar
                      value={exp.progress}
                      color="blue"
                      className="h-full w-[2px] rotate-180"
                    />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center w-20">
                    <div className="w-5 h-5 rounded-full bg-primary mb-2" />
                    <div className="text-lg font-semibold text-primary">
                      {exp.year}
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <h5 className="font-medium mb-1">{exp.title}</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="space-y-3">
                      {exp.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{skill.name}</span>
                            <span className="text-muted-foreground">
                              {skill.progress}%
                            </span>
                          </div>
                          <Progress.Root 
                            className="relative h-2 w-full overflow-hidden rounded-full bg-secondary"
                          >
                            <Progress.Indicator
                              className="h-full bg-primary transition-all duration-500 ease-out"
                              style={{ width: `${skill.progress}%` }}
                            />
                          </Progress.Root>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 备忘录组件 */}
        <MemoCard />

        
      </div>
    </motion.div>
  );
}