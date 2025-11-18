# Этап 1: Сборка с Node.js (альпийская версия для компактности)
FROM node:18-alpine as builder

# Создаём рабочую директорию
WORKDIR /app

# Копируем package*.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходники
COPY . .

# Собираем проект (файлы попадут в ./dist/)
RUN npm run build

# Этап 2: Запуск Nginx для раздачи статики
FROM nginx:alpine

# Удаляем дефолтный контент Nginx
RUN rm -rf /usr/share/nginx/html/*

# Копируем собранный dist/ из builder-этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx в foreground
CMD ["nginx", "-g", "daemon off;"]