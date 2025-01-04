# 鹿梦的个人网站

一个使用 Next.js 14 构建的现代化个人博客网站。在线地址：http://my.lumenglover.com，请您文明访问，切勿发起恶意请求，共同营造良好网络环境，感谢理解与支持。

## 功能特点

📝 Markdown 支持的博客系统

🎨 优雅的 UI 设计

🌙 深色模式支持

📱 响应式布局

⚡ 服务端渲染优化

🔍 文章搜索功能

🏷️ 文章分类系统

## 技术栈

前端框架: Next.js 14

UI 框架: Tailwind CSS

动画: Framer Motion

容器化: Docker

Web 服务器: Nginx

包管理: npm

## 快速开始

### 本地开发

```
# 克隆项目
git clone url
cd my-blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看网站。

### 生产部署

```
# 构建项目
npm run build

# 启动生产服务器
npm run start
```

### Docker 部署

```
# 构建镜像并启动容器
docker-compose up -d

# 查看日志
docker-compose logs -f
```

## 项目结构

```
my-blog/
├── app/                # Next.js 应用目录
│   ├── blog/          # 博客相关页面
│   ├── about/         # 关于页面
│   └── layout.tsx     # 全局布局
├── components/        # React 组件
├── public/           # 静态资源
├── styles/          # 样式文件
├── lib/             # 工具函数
└── docker/          # Docker 相关配置
```

## 配置说明

### Docker 配置

项目使用多阶段构建的 Dockerfile：

```
# 构建阶段
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 运行阶段
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
# ... 其他配置
```

### Docker Compose 配置

```
version: "3.8"
services:
  nginx:
    image: nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /usr/local/nginx/conf/my-blog/nginx.conf:/etc/nginx/nginx.conf
    # ... 其他配置

  my-blog:
    build: .
    ports:
      - "3000:3000"
    # ... 其他配置
```

## 部署流程

1.确保服务器已安装必要软件：

Docker

Docker Compose

Git

2.克隆项目到服务器：

```
   git clone <repository-url>
   cd my-blog	
```

3.执行部署脚本：

```
   ./deploy.sh
```

## 开发指南

### 添加新文章

在 app/blog/[slug] 目录下创建新的 Markdown 文件

更新文章索引

### 自定义样式

修改 tailwind.config.js

在 styles 目录下添加自定义样式

### 组件开发

在 components 目录下创建新组件

使用 Tailwind CSS 进行样式设计

添加必要的类型定义

## 维护说明

### 日常维护

定期更新依赖包

监控服务器状态

备份重要数据

检查错误日志

### 更新部署

```
# 拉取最新代码
git pull

# 重新部署
./deploy.sh
```

## 常见问题

### 构建失败

检查 Node.js 版本

清理构建缓存

检查依赖完整性

### 容器启动失败

检查端口占用

查看容器日志

确认环境变量配置

## 贡献指南

1.Fork 项目

2.创建特性分支

3.提交变更

发起 Pull Request

## 许可证

MIT License

## 联系方式

作者：鹿梦

邮箱：[109484028@qq.com]

网站：[https://lumenglover.com]

\---

文档最后更新时间：2025-01-04
