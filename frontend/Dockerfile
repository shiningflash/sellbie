FROM node:18-alpine

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app

COPY . ./

COPY package.json package-lock.json ./

RUN npm install --silent

EXPOSE 5173

CMD ["npm", "run", "host"]
