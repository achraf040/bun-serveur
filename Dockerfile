FROM oven/bun:1-alpine

WORKDIR /app

# Dépendances (en cache tant que package.json ne change pas)
COPY package.json bun.lock* ./
RUN bun install --production

# Code de l'application
COPY src ./src
COPY public ./public

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

USER bun

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/api/health || exit 1

CMD ["bun", "src/server.ts"]
