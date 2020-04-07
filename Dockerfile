FROM node:10.15-slim

MAINTAINER Max Koshel <max.koshel@gmail.com>

EXPOSE 80

# Set timezone.
ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Set the current working directory.
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Копируем код сервиса
COPY . /home/node/app

# Устанавливаем зависимости
RUN npm install --quiet --production --no-progress && \
    npm cache clean --force

# Start the container under an unprivileged user.
# By default, the Docker container works as root.
USER node

ENV NODE_ENV production

# Start the service.
ENTRYPOINT ["node", "-r", "app.js"]
