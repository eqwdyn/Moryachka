# --- ЭТАП 1: Сборка (тут нужен Node и Vite) ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Используем legacy-peer-deps только если локально не можешь починить конфликт
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# --- ЭТАП 2: Продакшен (тут НЕ нужен Node, нужен Nginx) ---
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Копируем ТОЛЬКО готовую сборку из этапа builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг nginx (обязательно создай client/nginx.conf!)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Запускаем Nginx, а НЕ vite
CMD ["nginx", "-g", "daemon off;"]
