import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { DotPattern } from "@/components/ui/dot-pattern";
import Meteors from "@/components/ui/meteors";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "鹿梦的个人网站",
  description: "全栈开发者，热爱技术与生活",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen relative">
          {/* 点阵背景 */}
          <DotPattern
            className="fixed inset-0 -z-20 dark:opacity-20"
            width={16}
            height={16}
            cx={1}
            cy={1}
            cr={1}
          />

          {/* 流星背景 */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <Meteors number={20} />
          </div>

          {/* 导航栏组件 */}
          <NavBar />

          {/* 使用新的宽度类 */}
          <main className="w-[95vw] max-w-wide mx-auto px-4 sm:px-6 py-8 mt-[60px] flex-grow">
            {children}
          </main>

          {/* 底部备案信息 */}
          <footer className="w-full border-t bg-background mt-auto relative z-[9999]">
            <div className="w-[95vw] max-w-wide mx-auto px-4 sm:px-6 py-6">
              <div className="text-center text-sm text-muted-foreground">
                <p>© 2024 鹿梦. All rights reserved.</p>
                <a 
                  href="https://beian.miit.gov.cn/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  陇ICP备2024012699号
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
