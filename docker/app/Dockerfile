FROM node:14.16.1-alpine

WORKDIR /front

COPY package*.json /front

RUN apk update && \
  apk add --no-cache git curl && \
  curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

# ホットリロード
ENV CHOKIDAR_USEPOLLING=true

RUN yarn global add @vue/cli

EXPOSE 8080
