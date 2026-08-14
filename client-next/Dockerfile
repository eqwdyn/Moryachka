FROM node:20-alpine AS builder

WORKDIR /app

# Копируем зависимости отдельно, чтобы кэш не ломался при каждом изменении кода
COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Build
RUN NEXT_ENV=production npm run build

# Runtime
FROM node:20-alpine
WORKDIR /app

# Только продакшн-зависимости
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./


ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
