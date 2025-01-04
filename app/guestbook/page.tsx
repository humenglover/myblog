"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { Meteors } from "@/components/ui/meteors";
import { MessageSquare, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { MinimalCard, MinimalCardContent } from "@/components/ui/minimal-card";

// 定义类型
interface Message {
  id: string;
  content: string;
  createTime: string;
}

interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

const getRandomAvatarColor = () => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-cyan-500',
      'bg-orange-500',
      'bg-teal-500',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  // 生成随机字母头像
  const getInitialLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
  };

// 随机渐变背景
const getRandomGradient = () => {
  const gradients = [
    'from-blue-500/20 to-purple-500/20',
    'from-green-500/20 to-blue-500/20',
    'from-yellow-500/20 to-pink-500/20',
    'from-pink-500/20 to-purple-500/20',
    'from-indigo-500/20 to-cyan-500/20',
    'from-orange-500/20 to-red-500/20',
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

export default function GuestbookPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComposing, setIsComposing] = useState(false);
  const [messageContent, setMessageContent] = useState("");

  // 获取留言数据
  const fetchMessages = async () => {
    try {
      const response = await axios.post<ApiResponse<Message[]>>(
        "https://lumenglover.com/api/message/getTop500"
      );
      if (response.data.code === 0) {
        setMessages(response.data.data);
      }
    } catch (error) {
      console.error("获取留言失败:", error);
    }
  };

  // 添加留言
  const addMessage = async (content: string) => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);
      const response = await axios.post<ApiResponse<boolean>>(
        "https://lumenglover.com/api/message/add",
        { content }
      );
      if (response.data.code === 0) {
        await fetchMessages();
        setMessageContent("");
        setIsComposing(false);
        return true;
      }
      return false;
    } catch (error) {
      console.error("发送留言失败:", error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // 初始加载数据
  useEffect(() => {
    fetchMessages();
  }, []);

  // 根据消息数量决定分层
  const getMessageLayers = () => {
    if (messages.length < 10) {
      // 数据少时只返回一层，并放在中间
      return [messages];
    }
    // 数据多时分5层
    return Array.from({ length: 5 }, () => 
      [...messages].sort(() => Math.random() - 0.5)
    );
  };

  return (
    <div className="min-h-screen relative isolate">
      {/* 背景效果 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-dot-white/[0.1] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="relative z-[2] container ">

       {/* 弹幕区域 */}
       <div className=" relative mx-auto mt-24 max-w-7xl bg-white/5 backdrop-blur-sm rounded-full border border-white/10 p-8 mb-24 min-h-[600px] hidden sm:block">
          {getMessageLayers().map((layer, index, layers) => (
            <div 
              key={index} 
              className="absolute inset-x-0"
              style={{
                // 当只有一层时居中显示，否则均匀分布
                top: layers.length === 1 
                  ? '50%' 
                  : `${(index * 100) / layers.length}%`,
                transform: `translateY(-50%)`,
              }}
            >
              <div 
                className="flex whitespace-nowrap animate-scroll"
                style={{
                  animationDuration: `${60 + index * 10}s`,
                  animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
                }}
              >
                {layer.map((message) => (
                  <div
                    key={message.id}
                    className="mx-4 h-8 rounded-full bg-[#181d16] w-[300px] flex items-center gap-3 pr-4"
                  >
                    {/* 彩色头像 */}
                    <div className={`w-8 h-8 rounded-full ${getRandomAvatarColor()} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-medium">
                        {getInitialLetter()}
                      </span>
                    </div>
                    {/* 留言内容 */}
                    <p className="text-white text-sm truncate flex-1">
                      {message.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* 移动端卡片区域 */}
        <div className="w-full px-2 space-y-1.5 sm:hidden mt-2 mb-20">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <MinimalCard className="hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50">
                <MinimalCardContent className="py-1.5 px-2">
                  <div className="flex items-center gap-2 min-h-[32px]">
                    {/* 头像 */}
                    <div className={`w-6 h-6 rounded-full ${getRandomAvatarColor()} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-medium">
                        {getInitialLetter()}
                      </span>
                    </div>
                    {/* 内容区域 */}
                    <div className="flex-1 min-w-0">
                      <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-normal line-clamp-2">
                        {message.content}
                      </p>
                    </div>
                  </div>
                </MinimalCardContent>
              </MinimalCard>
            </motion.div>
          ))}
        </div>

        {/* 发送框 */}
        <motion.div 
          className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 w-[min(90vw,600px)]"
          animate={isComposing ? "expanded" : "collapsed"}
          variants={{
            collapsed: { height: "40px" },
            expanded: { height: "60px" }
          }}
        >
          <div className="w-full h-full bg-black/80 backdrop-blur-xl rounded-full overflow-hidden">
            {!isComposing ? (
              <button
                onClick={() => setIsComposing(true)}
                className="w-full h-full flex items-center justify-center gap-2 text-white/90 hover:text-white"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">写留言</span>
              </button>
            ) : (
              <div className="p-2 sm:p-4 w-full h-full flex items-center gap-2 sm:gap-4">
                <input
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                  placeholder="写下你的想法..."
                  className="flex-1 h-[32px] sm:h-[40px] bg-white/10 rounded-full px-3 sm:px-4 text-sm sm:text-base text-white/90 
                    placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                  maxLength={500}
                />
                <button
                  onClick={() => messageContent.trim() && addMessage(messageContent)}
                  disabled={isSubmitting || !messageContent.trim()}
                  className={`h-[32px] sm:h-[40px] rounded-full flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6
                    ${isSubmitting || !messageContent.trim()
                      ? 'bg-white/10 text-white/30 cursor-not-allowed'
                      : 'bg-white/20 text-white hover:bg-white/30'
                    } min-w-[80px] sm:min-w-[100px]`}
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-sm sm:text-base">{isSubmitting ? '发送中...' : '发送'}</span>
                </button>
                <button
                  onClick={() => setIsComposing(false)}
                  className="text-white/60 hover:text-white/90 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* 流星效果 */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Meteors number={20} />
      </div>

      {/* 动画样式 */}
      <style jsx global>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  );
} 