"use client";

import { useEffect, useState, memo } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// 定义类型
interface ArcData {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

interface GlobeConfig {
  pointSize: number;
  globeColor: string;
  showAtmosphere: boolean;
  atmosphereColor: string;
  atmosphereAltitude: number;
  emissive: string;
  emissiveIntensity: number;
  shininess: number;
  polygonColor: string;
  polygonStrokeColor: string;
  polygonSideColor: string;
  polygonStrokeWidth: number;
  ambientLight: string;
  directionalLeftLight: string;
  directionalTopLight: string;
  pointLight: string;
  arcTime: number;
  arcLength: number;
  rings: number;
  maxRings: number;
  initialPosition: { lat: number; lng: number };
  autoRotate: boolean;
  autoRotateSpeed: number;
  height: number;
  width: number;
  rendererConfig: {
    antialias: boolean;
    alpha: boolean;
    powerPreference: string;
    precision: string;
  };
  enableZoom: boolean;
  enablePan: boolean;
  pixelRatio: number;
}

interface WorldProps {
  data: ArcData[];
  globeConfig: GlobeConfig;
}

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="w-[200px] h-[200px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  ),
});

const weekDays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

const quotes = [
  "生活不止眼前的代码，还有诗和远方。",
  "用镜头定格美好，用代码构建未来。",
  "既要仰望星空，也要脚踏实地。",
  "编程是一门艺术，摄影是另一种表达。",
  "保持热爱，奔赴山海。",
  "让技术与艺术在这里相遇。",
  "静心编码，悦享生活。",
  "用代码书写人生，以梦想丈量世界。",
  "既要心怀理想，也要脚踏实地。",
  "愿你的代码，如你的生活一样精彩。"
];

const globeConfig = {
  pointSize: 2,
  globeColor: "#2B65B4",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.2,
  emissive: "#3373C4",
  emissiveIntensity: 0.3,
  shininess: 0.6,
  polygonColor: "#FFFFFF",
  polygonStrokeColor: "#000000",
  polygonSideColor: "#FFFFFF",
  polygonStrokeWidth: 0.5,
  ambientLight: "#FFFFFF",
  directionalLeftLight: "#FFFFFF",
  directionalTopLight: "#FFFFFF",
  pointLight: "#FFFFFF",
  arcTime: 1000,
  arcLength: 0.5,
  rings: 1,
  maxRings: 2,
  initialPosition: { lat: 39.9042, lng: 116.4074 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
  height: 270,
  width: 270,
  rendererConfig: {
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
    precision: "highp",
  },
  enableZoom: false,
  enablePan: false,
  pixelRatio: window.devicePixelRatio,
};

const sampleArcs = [
  {
    order: 1,
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: "#3b82f6",
  },
  {
    order: 2,
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.1,
    color: "#06b6d4",
  },
  {
    order: 3,
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: "#6366f1",
  }
];

// 使用类型的 MemoizedWorld
const MemoizedWorld = memo<WorldProps>(({ data, globeConfig }) => (
  <World data={data} globeConfig={globeConfig} />
));

MemoizedWorld.displayName = 'MemoizedWorld';

export default function Clock3D() {
  const [value, setValue] = useState(new Date());
  const [timeString, setTimeString] = useState("");
  const [dateString, setDateString] = useState("");
  const [quote, setQuote] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);

    const interval = setInterval(() => {
      const now = new Date();
      setValue(now);
      
      setTimeString(now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
      
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const weekDay = weekDays[now.getDay()];
      setDateString(`${year}年${month}月${day}日${weekDay}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 p-6 bg-[#f0eefc] dark:bg-[#f0eefc]/10 backdrop-blur-md rounded-xl border border-white/20">
        <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-1000"></div>
            <div className="relative bg-white/50 dark:bg-white/10 rounded-full p-4 backdrop-blur-sm">
              <Clock 
                value={value} 
                size={160} 
                renderNumbers={true}
                className="clock-custom"
              />
            </div>
          </div>
          
          <div className="w-full md:w-64 flex flex-col items-center md:items-start">
            <div className="text-2xl font-medium text-gray-800 dark:text-gray-200">
              {timeString}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {dateString}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
              <div className="relative">
                <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-full blur-sm animate-ping"></div>
                <div className="absolute -inset-1.5 bg-[#22c55e]/10 rounded-full blur-md animate-pulse"></div>
                <MapPin 
                  size={12} 
                  className="relative text-[#22c55e] z-10" 
                />
              </div>
              北京时间
            </div>
            <div className="text-sm text-gray-600/80 dark:text-gray-400/80 mt-3 italic">
              "{quote}"
            </div>
          </div>
        </div>
        
        <div className="relative w-[270px] h-[270px] overflow-hidden flex items-center justify-center mx-auto lg:mx-0 lg:-mr-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <MemoizedWorld 
              data={sampleArcs} 
              globeConfig={globeConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 