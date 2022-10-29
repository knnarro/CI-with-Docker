# node:10인 이유: npm을 포함하고 있어서
FROM node:10

WORKDIR usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["node", "server.js"]