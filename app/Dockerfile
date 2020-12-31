FROM node:14.15.3-alpine3.11

WORKDIR /app

COPY server.js .
COPY package-lock.json .
COPY package.json .

EXPOSE 3000

RUN npm install

CMD node server.js