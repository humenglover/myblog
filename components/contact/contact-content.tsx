"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { SiBilibili, SiTiktok } from "react-icons/si";
import { createElement } from 'react';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import WorldMap from "@/components/ui/world-map";

const contactMethods = [
  {
    icon: Mail,
    name: "QQ邮箱",
    value: "109484028@qq.com",
    href: "mailto:109484028@qq.com",
    description: "随时欢迎通过邮件联系我",
  },
  {
    icon: Github,
    name: "GitHub",
    value: "humenglover",
    href: "https://github.com/humenglover",
    description: "查看我的开源项目",
  },
  {
    icon: SiBilibili,
    name: "哔哩哔哩",
    value: "bili_45532304845",
    href: "https://b23.tv/pgoOOmz",
    description: "关注我的B站账号",
  },
  {
    icon: SiTiktok,
    name: "抖音",
    value: "68316901625",
    href: "https://www.douyin.com/user/68316901625",
    description: "关注我的抖音账号",
  },
];

const reviews = [
  {
    name: "爱因斯坦",
    username: "Albert Einstein",
    body: "想象力比知识更重要，因为知识是有限的，而想象力概括着世界的一切，推动着进步，并且是知识进化的源泉。",
    img: "https://avatar.vercel.sh/einstein",
  },
  {
    name: "马云",
    username: "Jack Ma",
    body: "今天很残酷，明天更残酷，后天很美好，但是大多数人死在明天晚上。",
    img: "https://avatar.vercel.sh/jackma",
  },
  {
    name: "乔布斯",
    username: "Steve Jobs",
    body: "你的时间有限，所以不要为别人而活。不要被教条所限，不要活在别人的观念里。",
    img: "https://avatar.vercel.sh/jobs",
  },
  {
    name: "孔子",
    username: "Confucius",
    body: "三人行，必有我师焉。择其善者而从之，其不善者而改之。",
    img: "https://avatar.vercel.sh/confucius",
  },
  {
    name: "马斯克",
    username: "Elon Musk",
    body: "当某件事很重要时，即使形势不利，你也要去做。",
    img: "https://avatar.vercel.sh/musk",
  },
  {
    name: "李小龙",
    username: "Bruce Lee",
    body: "不要祈求一帆风顺，要准备直面风浪。",
    img: "https://avatar.vercel.sh/brucelee",
  },
  {
    name: "老子",
    username: "Laozi",
    body: "千里之行，始于足下。合抱之木，生于毫末。",
    img: "https://avatar.vercel.sh/laozi",
  },
  {
    name: "尼采",
    username: "Nietzsche",
    body: "那些杀不死我的，使我更强大。",
    img: "https://avatar.vercel.sh/nietzsche",
  },
  {
    name: "曾国藩",
    username: "Zeng Guofan",
    body: "天下无难事，只怕有心人。做事要循序渐进，不可急于求成。",
    img: "https://avatar.vercel.sh/zengguofan",
  },
  {
    name: "王阳明",
    username: "Wang Yangming",
    body: "故立志者，为学之心也；为学者，立志之事也。",
    img: "https://avatar.vercel.sh/wangyang",
  },
  {
    name: "苏轼",
    username: "Su Shi",
    body: "古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。",
    img: "https://avatar.vercel.sh/sushi",
  },
  {
    name: "庄子",
    username: "Zhuangzi",
    body: "人生天地之间，若白驹过隙，忽然而已。",
    img: "https://avatar.vercel.sh/zhuangzi",
  },
  {
    name: "卡耐基",
    username: "Dale Carnegie",
    body: "要让别人喜欢你，首先你要学会喜欢别人。",
    img: "https://avatar.vercel.sh/carnegie",
  },
  {
    name: "鲁迅",
    username: "Lu Xun",
    body: "其实地上本没有路，走的人多了，也便成了路。",
    img: "https://avatar.vercel.sh/luxun",
  },
  {
    name: "梁启超",
    username: "Liang Qichao",
    body: "少年智则国智，少年富则国富，少年强则国强。",
    img: "https://avatar.vercel.sh/liangqichao",
  },
  {
    name: "柏拉图",
    username: "Plato",
    body: "认识你自己。",
    img: "https://avatar.vercel.sh/plato",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[280px] cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="36" height="36" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm leading-relaxed line-clamp-3">
        {body}
      </blockquote>
    </figure>
  );
};

export default function ContactContent() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <WorldMap
          dots={[
            {
              start: { lat: 34.3416, lng: 108.9398 }, // 西安
              end: { lat: 39.9042, lng: 116.4074 }, // 北京
            },
            {
              start: { lat: 34.3416, lng: 108.9398 }, // 西安
              end: { lat: 31.2304, lng: 121.4737 }, // 上海
            },
            {
              start: { lat: 34.3416, lng: 108.9398 }, // 西安
              end: { lat: 22.5431, lng: 114.0579 }, // 深圳
            },
            {
              start: { lat: 34.3416, lng: 108.9398 }, // 西安
              end: { lat: 37.7749, lng: -122.4194 }, // 旧金山
            },
            {
              start: { lat: 34.3416, lng: 108.9398 }, // 西安
              end: { lat: 35.6762, lng: 139.6503 }, // 东京
            },
            {
              start: { lat: 34.3416, lng: 108.9398 }, // 西安
              end: { lat: 51.5074, lng: -0.1278 }, // 伦敦
            },
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/10" />
        <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center pt-12">
          <h1 className="text-4xl font-bold mb-4">联系我</h1>
          <p className="text-muted-foreground">
            选择你喜欢的方式与我交流
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contactMethods.map((method) => (
            <motion.a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border bg-background/30 hover:bg-background/40 transition-colors group backdrop-blur-[2px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {createElement(method.icon, {
                    className: "w-6 h-6"
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {method.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {method.description}
                  </p>
                  <p className="text-sm font-mono bg-background/30 px-2 py-1 rounded">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>期待与你的交流！</p>
        </div>

        <div className="flex justify-center w-screen relative left-[50%] right-[50%] mx-[-50vw]">
          <div className="relative flex h-[400px] w-[80vw] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background/30 backdrop-blur-[2px] mt-12">
            <div className="overflow-hidden py-8">
              <Marquee pauseOnHover className="[--duration:35s]">
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            <div className="overflow-hidden py-8">
              <Marquee reverse pauseOnHover className="[--duration:35s]">
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 