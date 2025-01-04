"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const blogPosts = {
  "nextjs-14-features": {
    title: "Next.js 14 新特性解析",
    date: "2024-03-15",
    category: "前端开发",
    content: `
# Next.js 14 新特性解析

Next.js 14 带来了许多激动人心的新特性，让我们一起来探索这些重要的更新。

## Server Actions

Server Actions 是 Next.js 14 中最重要的新特性之一。它允许你直接在组件中定义服务器端的操作，无需创建单独的 API 路由。

\`\`\`typescript
// 在组件中直接定义服务器操作
async function handleSubmit(formData: FormData) {
  'use server'
  // 处理表单数据
}
\`\`\`

## Partial Prerendering (预览)

Partial Prerendering 是一个实验性功能，它允许你将页面的静态部分和动态部分分开处理，提供更好的性能和用户体验。

## 性能优化

Next.js 14 在性能方面也有显著提升：

- 更快的开发服务器启动时间
- 改进的构建性能
- 更好的代码分割策略

## 总结

Next.js 14 的这些新特性让开发体验更加流畅，也为应用提供了更好的性能。建议在新项目中尝试这些特性。
    `
  },
  "fullstack-best-practices": {
    title: "全栈开发中的最佳实践",
    date: "2024-03-10",
    category: "全栈开发",
    image: "/assets/blog/fullstack.jpg",
    content: `
# 全栈开发中的最佳实践

作为一名全栈开发者，掌握良好的开发实践对于提高代码质量和开发效率至关重要。

## 项目结构

保持清晰的项目结构是关键：

\`\`\`
/src
  /components   # React 组件
  /lib         # 工具函数
  /api         # API 路由
  /hooks       # 自定义 Hooks
  /styles      # 样式文件
  /types       # TypeScript 类型定义
\`\`\`

## 代码规范

- 使用 ESLint 和 Prettier 保持代码风格一致
- 编写清晰的注释和文档
- 遵循 SOLID 原则
- 使用 TypeScript 增加类型安全

## 性能优化

### 前端优化
- 实现懒加载
- 优化图片加载
- 使用适当的缓存策略

### 后端优化
- 使用数据库索引
- 实现合适的缓存机制
- API 响应压缩

## 总结

良好的开发实践能够帮助我们构建更好的应用，提高团队协作效率。持续学习和改进是成为优秀全栈开发者的关键。
    `
  },
  "photography-basics": {
    title: "摄影入门：光圈、快门与ISO",
    date: "2024-03-20",
    category: "摄影技巧",
    content: `
# 摄影入门：光圈、快门与ISO

摄影的核心在于对光线的控制，而控制光线主要依靠三个基本要素：光圈、快门速度和ISO感光度。这三者被称为"曝光三角"，是掌握摄影技术的基础。

## 光圈（Aperture）

光圈是镜头中控制进光量的装置，用f值表示（如f/1.8、f/2.8等）。

### 光圈的作用
- 控制进光量：f值越小，进光量越大
- 影响景深：f值越小，背景虚化越明显
- 常用场景：人像摄影常用大光圈（小f值）来虚化背景

## 快门速度（Shutter Speed）

快门速度决定感光元件接收光线的时间长短。

### 快门速度的选择
- 手持拍摄：建议不低于1/焦距
- 运动主体：需要更快的快门速度
- 创意效果：慢快门可以制造动感模糊

## ISO感光度

ISO感光度表示传感器对光线的敏感程度。

### ISO的使用原则
- 尽可能使用低ISO
- 高ISO会带来噪点
- 现代相机的高ISO表现越来越好

## 实践建议

1. 优先考虑光圈
   - 人像摄影：f/1.8 - f/2.8
   - 风景摄影：f/8 - f/11
   - 微距摄影：f/11 - f/16

2. 其次考虑快门速度
   - 静态主体：1/60秒以上
   - 运动主体：1/500秒以上
   - 微光环境：考虑使用三脚架

3. 最后调整ISO
   - 白天室外：100-400
   - 室内自然光：400-1600
   - 暗光环境：1600以上

## 总结

掌握曝光三角是摄影技术的基础，需要通过大量实践来熟悉不同参数的效果。建议新手从光圈优先模式开始练习，逐步过渡到手动模式。
    `
  },
  "street-photography-composition": {
    title: "城市街拍的构图技巧",
    date: "2024-03-18",
    category: "摄影技巧",
    content: `
# 城市街拍的构图技巧

城市街拍是一种充满活力的摄影形式，好的构图可以让平凡的街景变得引人入胜。本文将分享一些实用的街拍构图技巧。

## 三分法构图

三分法是最基础也是最实用的构图法则之一。

### 如何运用
- 将画面均匀分成九宫格
- 将主体放在交叉点上
- 地平线对齐水平线

## 框架构图

利用环境中的自然框架来强调主体。

### 常见的框架元素
- 门框和窗户
- 拱门和隧道
- 树木和建筑物

## 引导线

利用线条引导观者的视线。

### 常见的引导线
- 道路和铁轨
- 建筑物的边缘
- 栏杆和扶手

## 对称与反射

城市环境中常见的对称元素。

### 创作要点
- 利用水面反射
- 建筑物的对称性
- 精确的构图对齐

## 层次与空间

创造画面的纵深感。

### 实现方法
- 前景、中景、远景的组合
- 利用自然框架
- 透视效果的运用

## 街拍实战技巧

1. 观察光线
   - 黄金时间
   - 建筑物阴影
   - 逆光效果

2. 捕捉瞬间
   - 保持相机随时待命
   - 预判场景发展
   - 快速反应和构图

3. 人文元素
   - 尊重被摄主体
   - 捕捉自然状态
   - 讲述城市故事

## 总结

好的街拍作品需要敏锐的观察力和快速的反应能力。多加练习，培养对构图的直觉，让拍摄变得更加自然流畅。
    `
  },
  "photo-editing-art": {
    title: "后期修图的艺术",
    date: "2024-03-15",
    category: "后期处理",
    content: `
# 后期修图的艺术

后期处理是摄影创作中不可或缺的一环，好的后期能让照片更具表现力。本文将分享个人的后期修图工作流程。

## 基础调整

### 曝光与对比度
- 确保画面整体曝光适中
- 调整对比度增加层次感
- 注意保持细节不要过度

### 色温与色调
- 根据拍摄场景调整色温
- 微调色调平衡
- 营造适合的氛围

## 局部调整

### 选择性调整
- 使用渐变滤镜
- 局部曝光调整
- 重点区域突出

### 细节处理
- 锐化适度
- 降噪控制
- 局部对比度

## 色彩处理

### 色彩理论
- 互补色的运用
- 色彩和谐
- 氛围营造

### 调色技巧
- HSL面板的使用
- 分离色调
- 色彩分级

## 常用软件

### Lightroom
- RAW文件处理
- 基础调整
- 批量处理

### Photoshop
- 细节修饰
- 图层混合
- 高级修图

## 修图建议

1. 保持适度
   - 不过分调整
   - 保持自然感
   - 突出重点

2. 建立风格
   - 形成个人色调
   - 预设的使用
   - 风格的一致性

3. 工作流程
   - 建立固定流程
   - 分类管理
   - 备份重要文件

## 总结

后期是摄影创作的延续，需要在技术和艺术之间找到平衡。好的后期应该是锦上添花，而不是画蛇添足。
    `
  },
  "web-performance": {
    title: "Web 性能优化实践",
    date: "2024-03-14",
    category: "性能优化",
    content: `
# Web 性能优化实践

性能优化是前端开发中的重要课题，本文将从多个角度探讨如何提升网站性能。

## 加载性能优化

### 资源压缩

\`\`\`javascript
// webpack 配置示例
module.exports = {
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 20000
    }
  }
}
\`\`\`

### 图片优化

\`\`\`typescript
// Next.js 图片优化示例
import Image from 'next/image'

export function OptimizedImage() {
  return (
    <Image
      src="/large-image.jpg"
      width={800}
      height={600}
      placeholder="blur"
      loading="lazy"
      alt="优化后的图片"
    />
  )
}
\`\`\`

## 运行时性能

### 虚拟列表

\`\`\`typescript
function VirtualList({ items }: { items: any[] }) {
  const [visibleItems, setVisibleItems] = useState([]);
  
  useEffect(() => {
    // 实现虚拟滚动逻辑
  }, [items]);

  return (
    <div className="virtual-list">
      {visibleItems.map(item => (
        <ListItem key={item.id} data={item} />
      ))}
    </div>
  );
}
\`\`\`

## 缓存策略

### 浏览器缓存

\`\`\`typescript
// API 路由缓存控制
export async function GET(request: Request) {
  return new Response(data, {
    headers: {
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=60'
    }
  })
}
\`\`\`

## 性能监控

### Web Vitals 监控

\`\`\`typescript
import { onCLS, onFID, onLCP } from 'web-vitals';

function reportWebVitals({ name, value }) {
  // 发送到分析服务
  analytics.send({
    metric: name,
    value: Math.round(value)
  });
}
\`\`\`

## 最佳实践

1. 代码分割
2. 懒加载
3. 预加载关键资源
4. 优化首屏加载
5. 使用 CDN

## 总结

性能优化是一个持续的过程，需要从多个维度进行优化并持续监控。
    `
  },
  "microservices-patterns": {
    title: "微服务架构设计模式",
    date: "2024-03-13",
    category: "系统架构",
    content: `
# 微服务架构设计模式

微服务架构已成为现代分布式系统的主流选择，本文将介绍常见的微服务设计模式。

## 服务发现模式

### 客户端发现模式

\`\`\`typescript
class ServiceDiscovery {
  private registry: Map<string, string[]> = new Map();

  async getService(serviceName: string): Promise<string> {
    const instances = this.registry.get(serviceName);
    if (!instances?.length) {
      throw new Error('Service not found');
    }
    // 简单的负载均衡
    return instances[Math.floor(Math.random() * instances.length)];
  }
}
\`\`\`

## 断路器模式

\`\`\`typescript
class CircuitBreaker {
  private failureCount = 0;
  private lastFailureTime?: Date;
  private readonly threshold = 5;
  private readonly resetTimeout = 60000; // 1分钟

  async execute(fn: () => Promise<any>) {
    if (this.isOpen()) {
      throw new Error('Circuit breaker is open');
    }

    try {
      const result = await fn();
      this.reset();
      return result;
    } catch (error) {
      this.recordFailure();
      throw error;
    }
  }

  private isOpen(): boolean {
    if (this.failureCount >= this.threshold) {
      const now = new Date();
      if (this.lastFailureTime && 
          now.getTime() - this.lastFailureTime.getTime() < this.resetTimeout) {
        return true;
      }
      this.reset();
    }
    return false;
  }

  private reset() {
    this.failureCount = 0;
    this.lastFailureTime = undefined;
  }

  private recordFailure() {
    this.failureCount++;
    this.lastFailureTime = new Date();
  }
}
\`\`\`

## API 网关模式

### 请求路由

\`\`\`typescript
class ApiGateway {
  async handleRequest(req: Request): Promise<Response> {
    const path = new URL(req.url).pathname;
    
    switch (true) {
      case path.startsWith('/users'):
        return this.routeToUserService(req);
      case path.startsWith('/orders'):
        return this.routeToOrderService(req);
      default:
        return new Response('Not Found', { status: 404 });
    }
  }
}
\`\`\`

## 最佳实践

1. 服务边界定义
2. 数据一致性
3. 故障处理
4. 监控和追踪
5. 安全考虑

## 常见挑战

1. 分布式事务
2. 数据同步
3. 服务依赖
4. 测试策略

## 总结

选择合适的微服务模式需要考虑具体业务场景和团队能力。
    `
  },
  "git-workflow": {
    title: "Git 工作流最佳实践",
    date: "2024-03-12",
    category: "开发工具",
    content: `
# Git 工作流最佳实践

规范的 Git 工作流程可以显著提升团队协作效率。

## 分支管理

### 分支命名规范

\`\`\`bash
# 功能分支
feature/user-authentication

# 修复分支
bugfix/login-issue

# 发布分支
release/v1.0.0
\`\`\`

### Git Flow 工作流

\`\`\`bash
# 创建功能分支
git checkout -b feature/new-feature develop

# 完成功能开发
git checkout develop
git merge --no-ff feature/new-feature
git branch -d feature/new-feature
\`\`\`

## 提交规范

### Conventional Commits

\`\`\`bash
# 功能提交
git commit -m "feat: add user authentication"

# 修复提交
git commit -m "fix: resolve login issue"

# 文档更新
git commit -m "docs: update API documentation"
\`\`\`

## 代码审查

### Pull Request 模板

\`\`\`markdown
## 变更说明

- 实现了用户认证功能
- 添加了单元测试
- 更新了文档

## 测试说明

- [ ] 单元测试通过
- [ ] 集成测试通过
- [ ] 手动测试通过
\`\`\`

## CI/CD 集成

### GitHub Actions 配置

\`\`\`yaml
name: CI

on:
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: |
          npm install
          npm test
\`\`\`

## 最佳实践

1. 经常提交小的改动
2. 保持提交信息清晰
3. 及时处理冲突
4. 定期同步主分支

## 常见问题解决

### 撤销提交

\`\`\`bash
# 撤销最后一次提交
git reset --soft HEAD^

# 修改提交信息
git commit --amend
\`\`\`

## 总结

良好的 Git 工作流程是高效团队协作的基础。
    `
  },
  "docker-practice": {
    title: "Docker 容器化应用实战",
    date: "2024-03-11",
    category: "DevOps",
    content: `
# Docker 容器化应用实战

Docker 已成为现代应用部署的标准工具，本文将介绍如何使用 Docker 进行应用容器化。

## Dockerfile 最佳实践

### 多阶段构建

\`\`\`dockerfile
# 构建阶段
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 运行阶段
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Docker Compose

### 开发环境配置

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db
      - redis

  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: myapp

  redis:
    image: redis:alpine
\`\`\`

## 容器编排

### Kubernetes 配置

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
\`\`\`

## 监控和日志

### 日志收集

\`\`\`yaml
version: '3.8'
services:
  app:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
\`\`\`

## 最佳实践

1. 使用官方基础镜像
2. 优化镜像大小
3. 合理使用缓存
4. 注意安全性
5. 健康检查

## 常见问题

1. 容器网络
2. 数据持久化
3. 性能优化
4. 安全加固

## 总结

Docker 容器化需要考虑开发、测试、生产等多个环境的需求。
    `
  },
  "react-state-management": {
    title: "React 状态管理方案对比",
    date: "2024-03-10",
    category: "前端开发",
    content: `
# React 状态管理方案对比

现代 React 应用中有多种状态管理方案，本文将对比几种主流方案的优劣。

## Context + useReducer

### 基础实现

\`\`\`typescript
// 创建 Context
const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppAction>;
}>(null!);

// 定义 Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// Provider 组件
function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
\`\`\`

## Redux Toolkit

### 创建 Store

\`\`\`typescript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
\`\`\`

## Zustand

### 基础用法

\`\`\`typescript
import create from 'zustand';

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}));
\`\`\`

## 方案对比

### Redux
优点：
- 生态系统完善
- 开发工具强大
- 适合大型应用

缺点：
- 样板代码较多
- 学习曲线陡峭

### Zustand
优点：
- 简单直观
- 体积小巧
- TypeScript 支持好

缺点：
- 生态不如 Redux
- 复杂场景支持有限

## 选择建议

1. 小型应用：Context 或 Zustand
2. 中型应用：Zustand 或 Jotai
3. 大型应用：Redux Toolkit

## 性能优化

1. 选择性更新
2. 状态规范化
3. 缓存优化
4. 按需加载

## 总结

选择合适的状态管理方案需要考虑项目规模、团队熟悉度等因素。
    `
  },
  "api-design": {
    title: "API 设计最佳实践",
    date: "2024-03-09",
    category: "后端开发",
    content: `
# API 设计最佳实践

良好的 API 设计是构建可维护系统的基础，本文将介绍 RESTful API 设计的最佳实践。

## RESTful 设计原则

### 资源命名

\`\`\`typescript
// 好的例子
GET /users
GET /users/123
POST /users
PUT /users/123
DELETE /users/123

// 不好的例子
GET /getUsers
POST /createUser
PUT /updateUser
DELETE /deleteUser
\`\`\`

## 请求响应设计

### 统一响应格式

\`\`\`typescript
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp: number;
}

// 示例实现
function createResponse<T>(data: T, message = 'Success'): ApiResponse<T> {
  return {
    code: 200,
    message,
    data,
    timestamp: Date.now()
  };
}
\`\`\`

## 错误处理

### 错误响应格式

\`\`\`typescript
class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: any
  ) {
    super(message);
  }
}

// 错误处理中间件
function errorHandler(err: ApiError, req: Request, res: Response) {
  res.status(err.statusCode).json({
    code: err.statusCode,
    message: err.message,
    details: err.details,
    timestamp: Date.now()
  });
}
\`\`\`

## 版本控制

### URL 版本控制

\`\`\`typescript
// 路由配置
router.get('/v1/users', getUsersV1);
router.get('/v2/users', getUsersV2);

// 或使用请求头
app.use((req, res, next) => {
  const version = req.headers['api-version'] || 'v1';
  req.apiVersion = version;
  next();
});
\`\`\`

## 安全性考虑

### 认证授权

\`\`\`typescript
// JWT 中间件
function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    throw new ApiError(401, 'No token provided');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    throw new ApiError(401, 'Invalid token');
  }
}
\`\`\`

## 性能优化

1. 分页
2. 缓存控制
3. 压缩
4. 限流

## 文档规范

### OpenAPI 规范

\`\`\`yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get users list
      parameters:
        - name: page
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: Success
\`\`\`

## 最佳实践

1. 使用 HTTPS
2. 实现 CORS
3. 请求验证
4. 日志记录
5. 监控告警

## 总结

好的 API 设计需要考虑安全性、可维护性、性能等多个方面。
    `
  },
  "modern-css-layout": {
    title: "现代 CSS 布局技巧",
    date: "2024-03-16",
    category: "前端开发",
    content: `
# 现代 CSS 布局技巧

CSS 布局技术在近年来有了巨大的进步，本文将介绍一些现代布局技术和最佳实践。

## Grid 布局

### 基础网格布局

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

### Grid 区域布局

\`\`\`css
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "nav content sidebar"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  gap: 1rem;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.content { grid-area: content; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }
\`\`\`

## Flexbox 布局

### 常见布局模式

\`\`\`css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}

.card {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;
}
\`\`\`

## Container Queries

\`\`\`css
@container (min-width: 400px) {
  .card {
    flex-direction: row;
    gap: 2rem;
  }
}

.card-container {
  container-type: inline-size;
}
\`\`\`

## 响应式布局

### 媒体查询最佳实践

\`\`\`css
/* 移动优先设计 */
.container {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
\`\`\`

## CSS 变量应用

\`\`\`css
:root {
  --spacing-unit: 8px;
  --primary-color: #3b82f6;
  --card-width: clamp(300px, 30vw, 400px);
}

.card {
  width: var(--card-width);
  margin: calc(var(--spacing-unit) * 2);
  border: 1px solid var(--primary-color);
}
\`\`\`

## 最佳实践

1. 使用语义化类名
2. 保持代码模块化
3. 遵循 BEM 命名规范
4. 优先使用 Grid 和 Flexbox
5. 合理使用 CSS 变量

## 性能优化

1. 避免过度嵌套
2. 使用简写属性
3. 合理使用选择器
4. 考虑 CSS 加载性能

## 总结

现代 CSS 提供了强大的布局工具，合理使用这些特性可以大大提升开发效率和用户体验。
    `
  },

  "ai-coding-tools": {
    title: "AI 辅助编程工具推荐",
    date: "2024-03-15",
    category: "开发工具",
    content: `
# AI 辅助编程工具推荐

AI 工具正在改变我们的编程方式，本文将介绍一些优秀的 AI 编程助手。

## GitHub Copilot

### 主要特点

\`\`\`typescript
// Copilot 自动补全示例
function calculateTotal(items: CartItem[]) {
  // Copilot 会根据上下文提供智能建议
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
\`\`\`

### 使用技巧
- 编写清晰的注释
- 合理组织代码结构
- 利用上下文提示

## ChatGPT 编程助手

### 代码生成

\`\`\`typescript
// 示例：让 ChatGPT 生成 API 接口
interface User {
  id: string;
  name: string;
  email: string;
}

async function getUserById(id: string): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}
\`\`\`

### 代码优化建议
- 性能改进
- 最佳实践
- 安全建议

## Amazon CodeWhisperer

### 特点
- AWS 服务集成
- 安全检查
- 代码完成

### 示例应用

\`\`\`typescript
// CodeWhisperer 可以提供 AWS 服务相关的代码建议
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

async function uploadToS3(file: Buffer, key: string) {
  const client = new S3Client({});
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Body: file
  });
  
  return client.send(command);
}
\`\`\`

## Tabnine

### 特点
- 本地运行
- 多语言支持
- 个性化建议

### 配置示例

\`\`\`json
{
  "tabnine.disable_file_regex": [
    "^node_modules/.*",
    ".*\\.test\\.ts$"
  ],
  "tabnine.inline_suggestions": true
}
\`\`\`

## 最佳实践

1. 工具选择
   - 项目需求
   - 团队规模
   - 预算考虑

2. 使用建议
   - 代码审查
   - 安全性检查
   - 持续学习

3. 注意事项
   - 数据安全
   - 代码质量
   - 依赖程度

## 总结

AI 编程工具能显著提升开发效率，但要注意平衡使用，保持代码质量和安全性。
    `
  },

  "typescript-advanced-types": {
    title: "TypeScript 高级类型系统详解",
    date: "2024-03-17",
    category: "编程语言",
    content: `
# TypeScript 高级类型系统详解

TypeScript 的类型系统非常强大，掌握高级类型特性可以帮助我们写出更优雅、类型安全的代码。

## 条件类型

### 基础用法

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

// 使用示例
type A = IsString<string>;  // true
type B = IsString<number>;  // false
\`\`\`

### 实际应用

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type Flatten<T> = T extends Array<infer U> ? U : T;

// 使用示例
type NumberArray = Flatten<number[]>;  // number
type StringValue = Flatten<string>;    // string
\`\`\`

## 映射类型

### 基础映射

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

// 使用示例
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
\`\`\`

### 高级映射

\`\`\`typescript
type PickByType<T, ValueType> = {
  [P in keyof T as T[P] extends ValueType ? P : never]: T[P]
};

interface Mixed {
  name: string;
  age: number;
  isActive: boolean;
  tags: string[];
}

type StringProps = PickByType<Mixed, string>;  // { name: string }
\`\`\`

## 工具类型

### 内置工具类型

\`\`\`typescript
// Pick
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Record
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// 使用示例
type UserKeys = "id" | "name";
type UserRecord = Record<UserKeys, string>;
\`\`\`

### 自定义工具类型

\`\`\`typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};
\`\`\`

## 类型推断

### infer 关键字

\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 使用示例
function greeting(name: string): string {
  return \`Hello, \${name}!\`;
}

type GreetingReturn = ReturnType<typeof greeting>;  // string
\`\`\`

## 最佳实践

1. 类型设计
   - 保持简单
   - 避免过度工程
   - 注重可读性

2. 性能考虑
   - 避免复杂的条件类型
   - 合理使用泛型约束
   - 注意类型计算开销

3. 代码组织
   - 类型定义集中管理
   - 适当的注释
   - 模块化

## 总结

TypeScript 的高级类型系统为我们提供了强大的工具，合理使用这些特性可以显著提升代码质量和开发体验。
    `
  },  "react-server-components": {
    title: "React Server Components 实战指南",
    date: "2024-03-19",
    category: "前端开发",
    content: `
# React Server Components 实战指南

React Server Components (RSC) 是 React 生态系统中的革命性技术，让我们深入了解其工作原理和实践应用。

## RSC 基础概念

### 什么是 Server Components

\`\`\`tsx
// 这是一个服务器组件
// app/components/ServerComponent.tsx
async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  
  return (
    <div>
      {json.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
\`\`\`

### 客户端组件 vs 服务器组件

\`\`\`tsx
// 客户端组件
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// 服务器组件中使用客户端组件
import { Counter } from './Counter';

async function ServerComponent() {
  const data = await fetchData();
  
  return (
    <div>
      <h1>{data.title}</h1>
      <Counter />
    </div>
  );
}
\`\`\`

## 性能优化实践

### 数据获取优化

\`\`\`tsx
// app/posts/page.tsx
async function getPosts() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
    take: 10,
  });
  
  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

### 流式渲染

\`\`\`tsx
import { Suspense } from 'react';

export default function BlogPage() {
  return (
    <div>
      <h1>我的博客</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
\`\`\`

## 实际应用场景

### 表单处理

\`\`\`tsx
// app/actions.ts
'use server';

export async function submitForm(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  await prisma.post.create({
    data: {
      title: title as string,
      content: content as string,
    },
  });
  
  revalidatePath('/posts');
}

// app/components/PostForm.tsx
export function PostForm() {
  return (
    <form action={submitForm}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">发布</button>
    </form>
  );
}
\`\`\`

### 缓存策略

\`\`\`tsx
import { unstable_cache } from 'next/cache';

const getCachedData = unstable_cache(
  async () => {
    const data = await fetchExpensiveData();
    return data;
  },
  ['cache-key'],
  {
    revalidate: 3600, // 1小时后重新验证
    tags: ['data'],
  }
);
\`\`\`

## 最佳实践

1. 组件划分
   - 明确服务器/客户端组件边界
   - 合理使用 'use client' 指令
   - 优化组件树结构

2. 数据处理
   - 使用服务器组件获取数据
   - 实现增量静态再生成
   - 合理使用缓存

3. 性能优化
   - 使用 Suspense 实现流式渲染
   - 实现渐进式增强
   - 优化首屏加载

## 常见问题解决

1. 状态管理
2. 路由处理
3. 数据预取
4. SEO 优化
5. 错误处理

## 总结

RSC 是 React 的未来，掌握其核心概念和最佳实践对于构建高性能的现代 Web 应用至关重要。
    `
  },

  "nextjs-vercel-deployment": {
    title: "使用 Next.js 和 Vercel 部署全栈应用",
    date: "2024-03-18",
    category: "全栈开发",
    content: `
# 使用 Next.js 和 Vercel 部署全栈应用

从项目初始化到生产环境部署，完整介绍 Next.js 全栈应用开发流程。

## 项目初始化

### 创建项目

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
\`\`\`

### 目录结构

\`\`\`plaintext
my-app/
├── app/
│   ├── api/
│   ├── (auth)/
│   ├── dashboard/
│   └── layout.tsx
├── components/
├── lib/
├── prisma/
└── public/
\`\`\`

## 数据库集成

### Prisma 设置

\`\`\`typescript
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
}
\`\`\`

### API 路由实现

\`\`\`typescript
// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const json = await request.json();
  
  const post = await prisma.post.create({
    data: json,
  });
  
  return NextResponse.json(post);
}
\`\`\`

## 认证实现

### Next Auth 配置

\`\`\`typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';
import { prisma } from '@/lib/prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
\`\`\`

## Vercel 部署

### 环境变量配置

\`\`\`bash
# .env.example
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"
\`\`\`

### 部署步骤

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量
4. 部署应用

### 部署配置

\`\`\`json
// vercel.json
{
  "buildCommand": "prisma generate && next build",
  "env": {
    "NEXTAUTH_URL": "https://your-domain.vercel.app"
  }
}
\`\`\`

## 性能优化

### 缓存策略

\`\`\`typescript
// app/posts/page.tsx
export const revalidate = 3600; // 1小时重新验证

async function getPosts() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 }
  });
  return posts.json();
}
\`\`\`

### 图片优化

\`\`\`tsx
import Image from 'next/image';

export function OptimizedImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority
      className="rounded-lg"
    />
  );
}
\`\`\`

## 监控和维护

1. 性能监控
   - Vercel Analytics
   - Core Web Vitals
   - 错误追踪

2. CI/CD 配置
   - GitHub Actions
   - 自动化测试
   - 自动部署

3. 日志管理
   - 应用日志
   - 访问日志
   - 错误日志

## 最佳实践

1. 代码组织
   - 模块化设计
   - 类型安全
   - 错误处理

2. 安全考虑
   - 认证授权
   - API 限流
   - 数据验证

3. SEO 优化
   - 元数据管理
   - 静态生成
   - 结构化数据

## 总结

Next.js 和 Vercel 的组合为全栈应用开发提供了极致的开发体验，掌握这些技术可以帮助我们构建高性能、可维护的现代 Web 应用。
    `
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return <div>文章不存在</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto"
    >
      <Link 
        href="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回博客列表
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground">
              {post.date}
            </span>
            <span className="text-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none prose-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
} 