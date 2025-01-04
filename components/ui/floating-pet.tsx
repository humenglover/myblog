"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

interface FloatingPetProps {
  initialPosition?: { x: number; y: number };
  emojis?: Array<{ mood: string; label: string }>;
  messages?: string[];
}

export function FloatingPet({
  initialPosition = { x: 20, y: window.innerHeight / 2 - 50 },
  emojis = [
    { mood: '😺', label: '普通' },
    { mood: '😻', label: '开心' },
    { mood: '😿', label: '伤心' },
    { mood: '😾', label: '生气' },
    { mood: '😸', label: '笑脸' },
    { mood: '😹', label: '大笑' },
    { mood: '😽', label: '害羞' },
    { mood: '🙀', label: '惊讶' },
    { mood: '😴', label: '睡觉' },
  ],
  messages = [
    '主人好~',
    '今天天气真不错！',
    '要一起玩吗？',
    '我有点困了...',
    '好想吃小鱼干~',
    '主人在写代码吗？',
    '需要我帮忙吗？',
    '让我们一起加油吧！',
  ]
}: FloatingPetProps) {
  // 状态管理
  const dragConstraints = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 20, y: window.innerHeight / 2 - 50 });
  const [mood, setMood] = useState('😺');
  const [message, setMessage] = useState('');
  const [isHappy, setIsHappy] = useState(false);
  const [followMouse, setFollowMouse] = useState(false);
  const [energy, setEnergy] = useState(100);
  const [isAsleep, setIsAsleep] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 对话内容
  const dialogues = [
    '主人好~',
    '今天天气真不错！',
    '要一起玩吗？',
    '我有点困了...',
    '好想吃小鱼干~',
    '主人在写代码吗？',
    '需要我帮忙吗？',
    '让我们一起加油吧！',
  ];

  // 初始位置设置
  useEffect(() => {
    const setInitialPosition = () => {
      setPosition({
        x: 20,
        y: Math.max(window.innerHeight / 2 - 50, 100)
      });
    };

    setInitialPosition();
    window.addEventListener('resize', setInitialPosition);
    return () => window.removeEventListener('resize', setInitialPosition);
  }, []);

  // 能量系统
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAsleep) {
        setEnergy(prev => Math.max(0, prev - 1));
      } else {
        setEnergy(prev => Math.min(100, prev + 2));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isAsleep]);

  // 自动休息
  useEffect(() => {
    if (energy < 20 && !isAsleep) {
      setIsAsleep(true);
      setMood('😴');
      setMessage('好困，要睡一会儿...');
      setTimeout(() => setMessage(''), 2000);
    }
  }, [energy]);

  // Spring 动画
  const springProps = useSpring({
    to: {
      x: position.x,
      y: position.y,
    },
    config: {
      tension: 300,
      friction: 30
    }
  });

  // 鼠标跟随
  useEffect(() => {
    if (!followMouse || isAsleep) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - 25,
        y: e.clientY - 25
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followMouse, isAsleep]);

  // 点击交互
  const handleClick = () => {
    if (isAsleep) {
      setIsAsleep(false);
      setMood('😺');
      setMessage('我醒啦！');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    if (energy < 10) {
      setMessage('我太累了...');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    setIsHappy(true);
    setMood('😻');
    setMessage('好开心！');
    setEnergy(prev => Math.max(0, prev - 5));
    
    setTimeout(() => {
      setIsHappy(false);
      setMessage('');
      setMood('😺');
    }, 3000);
  };

  // 说话功能
  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAsleep || isSpeaking || energy < 10) {
      if (energy < 10) {
        setMessage('我太累了，说不动了...');
        setTimeout(() => setMessage(''), 2000);
      }
      return;
    }
    
    setIsSpeaking(true);
    const randomDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
    setMessage(randomDialogue);
    setEnergy(prev => Math.max(0, prev - 3));
    
    setTimeout(() => {
      setMessage('');
      setIsSpeaking(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div ref={dragConstraints} className="fixed inset-0 pointer-events-none">
        <animated.div
          className="fixed z-50 select-none touch-none"
          style={springProps}
        >
          <motion.div
            drag={!isAsleep}
            dragMomentum={false}
            dragElastic={0.1}
            dragConstraints={dragConstraints}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isHappy ? 1.3 : 1,
              opacity: 1,
              rotate: isHappy ? [0, -10, 10, -10, 10, 0] : isAsleep ? [0, 5, 0] : 0
            }}
            transition={{
              duration: isAsleep ? 2 : 0.3,
              repeat: isAsleep ? Infinity : 0,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="pointer-events-auto"
          >
            <div className="relative group">
              {/* 能量条 */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{
                    width: `${energy}%`,
                    backgroundColor: energy < 30 ? '#ef4444' : energy < 60 ? '#f59e0b' : '#22c55e'
                  }}
                />
              </div>

              <div className="text-4xl md:text-5xl cursor-grab active:cursor-grabbing">
                {mood}
              </div>
              
              {/* 消息气泡 */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-xl shadow-lg whitespace-nowrap text-sm"
                >
                  {message}
                </motion.div>
              )}

              {/* 控制面板 */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isAsleep) setFollowMouse(!followMouse);
                    }}
                    className="bg-background/50 backdrop-blur-sm text-xs px-2 py-1 rounded-full pointer-events-auto hover:bg-background/70 transition-colors disabled:opacity-50"
                    disabled={isAsleep}
                  >
                    {followMouse ? '停止' : '跟随'}
                  </button>
                  <button
                    onClick={handleSpeak}
                    disabled={isAsleep || isSpeaking || energy < 10}
                    className="bg-background/50 backdrop-blur-sm text-xs px-2 py-1 rounded-full pointer-events-auto hover:bg-background/70 transition-colors disabled:opacity-50"
                  >
                    说话
                  </button>
                  {!isAsleep && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsAsleep(true);
                        setMood('😴');
                        setMessage('睡觉时间~');
                        setTimeout(() => setMessage(''), 2000);
                      }}
                      className="bg-background/50 backdrop-blur-sm text-xs px-2 py-1 rounded-full pointer-events-auto hover:bg-background/70 transition-colors"
                    >
                      睡觉
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </animated.div>
      </div>
    </AnimatePresence>
  );
}

export default FloatingPet; 