"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Search, Calendar, Tag, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ParticlesBackground } from "@/components/ui/particles-background";
const blogPosts = [
  {
    id: 1,
    title: "摄影入门：光圈、快门与ISO",
    description: "了解摄影中最基础的三要素：光圈、快门速度和ISO感光度，以及它们如何影响照片的效果",
    date: "2024-03-20",
    category: "摄影技巧",
    slug: "photography-basics"
  },
  {
    id: 2,
    title: "React Server Components 实战指南",
    description: "深入探讨 RSC 的工作原理，以及如何在实际项目中最大化其性能优势",
    date: "2024-03-19",
    category: "前端开发",
    slug: "react-server-components"
  },
  {
    id: 3,
    title: "使用 Next.js 和 Vercel 部署全栈应用",
    description: "从零开始，手把手教你如何使用 Next.js 构建全栈应用，并部署到 Vercel 平台",
    date: "2024-03-18",
    category: "全栈开发",
    slug: "nextjs-vercel-deployment"
  },
  {
    id: 4,
    title: "TypeScript 高级类型系统详解",
    description: "探索 TypeScript 的类型系统，包括条件类型、映射类型、类型推断等高级特性",
    date: "2024-03-17",
    category: "编程语言",
    slug: "typescript-advanced-types"
  },
  {
    id: 5,
    title: "现代 CSS 布局技巧",
    description: "掌握 Grid、Flexbox、Container Queries 等现代 CSS 布局技术，打造响应式网页设计",
    date: "2024-03-16",
    category: "前端开发",
    slug: "modern-css-layout"
  },
  {
    id: 6,
    title: "AI 辅助编程工具推荐",
    description: "精选当下最实用的 AI 编程助手，提高开发效率的实用指南",
    date: "2024-03-15",
    category: "开发工具",
    slug: "ai-coding-tools"
  },
  {
    id: 7,
    title: "Web 性能优化实践",
    description: "从加载性能到运行时性能，全方位提升网站性能的实用技巧",
    date: "2024-03-14",
    category: "性能优化",
    slug: "web-performance"
  },
  {
    id: 8,
    title: "微服务架构设计模式",
    description: "探讨微服务架构中常见的设计模式和最佳实践，包括服务发现、负载均衡等",
    date: "2024-03-13",
    category: "系统架构",
    slug: "microservices-patterns"
  },
  {
    id: 9,
    title: "Git 工作流最佳实践",
    description: "规范团队 Git 使用流程，提高协作效率的实用指南",
    date: "2024-03-12",
    category: "开发工具",
    slug: "git-workflow"
  },
  {
    id: 10,
    title: "Docker 容器化应用实战",
    description: "从基础概念到实际应用，掌握 Docker 容器化技术",
    date: "2024-03-11",
    category: "DevOps",
    slug: "docker-practice"
  },
  {
    id: 11,
    title: "React 状态管理方案对比",
    description: "深入对比 Redux、MobX、Zustand 等状态管理方案的优劣",
    date: "2024-03-10",
    category: "前端开发",
    slug: "react-state-management"
  },
  {
    id: 12,
    title: "API 设计最佳实践",
    description: "探讨 RESTful API 设计原则，以及如何构建易用、可维护的 API",
    date: "2024-03-09",
    category: "后端开发",
    slug: "api-design"
  }
];

// 定义卡片样式配置
const cardStyles = [
  {
    gradient: "from-pink-500/20 via-rose-500/10 to-purple-500/20",
    hoverGradient: "from-pink-500/30 via-rose-500/20 to-purple-500/30",
    border: "border-pink-500/20",
    hoverBorder: "group-hover:border-pink-500/40",
    icon: "bg-pink-500/20",
    iconText: "text-pink-500",
    shadow: "group-hover:shadow-pink-500/20"
  },
  {
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    hoverGradient: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30",
    border: "border-blue-500/20",
    hoverBorder: "group-hover:border-blue-500/40",
    icon: "bg-blue-500/20",
    iconText: "text-blue-500",
    shadow: "group-hover:shadow-blue-500/20"
  },
  {
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    hoverGradient: "from-amber-500/30 via-orange-500/20 to-red-500/30",
    border: "border-orange-500/20",
    hoverBorder: "group-hover:border-orange-500/40",
    icon: "bg-orange-500/20",
    iconText: "text-orange-500",
    shadow: "group-hover:shadow-orange-500/20"
  },
  {
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    hoverGradient: "from-emerald-500/30 via-green-500/20 to-teal-500/30",
    border: "border-green-500/20",
    hoverBorder: "group-hover:border-green-500/40",
    icon: "bg-green-500/20",
    iconText: "text-green-500",
    shadow: "group-hover:shadow-green-500/20"
  },
  {
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    hoverGradient: "from-violet-500/30 via-purple-500/20 to-fuchsia-500/30",
    border: "border-violet-500/20",
    hoverBorder: "group-hover:border-violet-500/40",
    icon: "bg-violet-500/20",
    iconText: "text-violet-500",
    shadow: "group-hover:shadow-violet-500/20"
  }
];

// 大卡片特殊样式
const featuredCardStyle = {
  gradient: "from-primary/10 via-transparent to-primary/10",
  hoverGradient: "from-primary/20 via-primary/5 to-primary/20",
  border: "border-primary/10",
  hoverBorder: "group-hover:border-primary/30",
  icon: "bg-primary/10",
  iconText: "text-primary",
  shadow: "group-hover:shadow-primary/20"
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen relative isolate">
      {/* 粒子效果 */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      {/* 全屏背景 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
        <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-dot-white/[0.1] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10">
        {/* 头部区域 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            博客文章
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            分享技术见解和学习心得，记录成长历程
          </p>

          {/* 搜索框 */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Bento Grid 布局 */}
        <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px]">
          {filteredPosts.map((post, i) => {
            const isFeatured = i === 3;
            const style = isFeatured ? featuredCardStyle : cardStyles[i % cardStyles.length];
            
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "group relative",
                  isFeatured && "md:col-span-2 md:row-span-2"
                )}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className={cn(
                    "relative h-full p-6 rounded-2xl border",
                    "transition-all duration-500",
                    "bg-gradient-to-br backdrop-blur-sm",
                    style.gradient,
                    style.border,
                    style.hoverBorder,
                    "hover:shadow-xl",
                    style.shadow,
                    isFeatured ? "hover:scale-[1.01]" : "hover:scale-[1.02]",
                    "group-hover:bg-gradient-to-br",
                    style.hoverGradient
                  )}>
                    <div className="flex flex-col gap-4 h-full">
                      {/* 文章元信息 */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Tag className="w-4 h-4" />
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* 文章内容 */}
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-3">
                          {post.description}
                        </p>
                      </div>

                      {/* 阅读更多 */}
                      <motion.div 
                        className="flex items-center text-primary font-medium"
                        whileHover={{ x: 10 }}
                      >
                        <span>阅读更多</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 无搜索结果 */}
        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              没有找到相关文章
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
} 