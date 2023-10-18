# FROM --platform=linux/amd64 app/base:latest as base

FROM node:18

# RUN apk add --update openssl

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . ./

EXPOSE 3000

COPY package.json package-lock.json ./

COPY prisma ./prisma/

RUN npm install --silent

RUN npx prisma generate

CMD [ "npm", "run", "start:dev" ]
