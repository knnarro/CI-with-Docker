# node:10인 이유: npm을 포함하고 있어서
FROM node:10

# 현재 디렉토리의 모든 파일을 docker 컨테이너 안의 디렉토리로 복사한다
COPY ./ ./

RUN npm install

CMD ["node", "server.js"]