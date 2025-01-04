#!/bin/bash

# 停止旧容器
docker-compose down

# 拉取最新代码
git pull

# 重新构建
docker-compose build

# 启动新容器
docker-compose up -d

# 清理未使用的镜像
docker image prune -f

echo "Deployment completed!" 