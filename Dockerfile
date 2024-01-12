# Etapa de construção
FROM node:16.15 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Etapa de execução
FROM nginx:alpine

COPY --from=builder /app/dist/cefet-park-web /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
