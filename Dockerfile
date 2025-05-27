# 빌드
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# esbuild 의존성 해결용
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./ 
RUN npm install
COPY . .

# esbuild 강제 재설치 (호환성 오류 방지)
RUN npm uninstall esbuild && npm install esbuild
RUN npm run build

# 배포
FROM nginx:alpine
EXPOSE 80

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html