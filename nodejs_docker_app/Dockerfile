# node:10인 이유: npm을 포함하고 있어서
FROM node:10

WORKDIR usr/src/app

COPY package.json ./
# package.json이 변경되지 않는다면 npm install이 실행되지 않을 것
RUN npm install

COPY ./ ./

CMD ["node", "server.js"]