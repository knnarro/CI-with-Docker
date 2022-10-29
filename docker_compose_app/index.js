const express = requrie("express");
const redis = require("redis");

// 레디스 클라이언트 생성
const client = redis.createClient({
    host: "redis-server", // docker-compose.yml에 명시한 컨테이너 이름
    port: 6379
})

const app = express();

// 숫자는 0부터 시작
client.set("number", 0)
// 루트 경로로 요청이 올 때마다 1씩 증가
app.get('/', (req, res) => {
    client("number", (err, number)=>{
        client.set("number", parseInt(number)+1)
        res.send(number+"번째 새로고침")
    })
    client.set("number", next_number)
})
app.listen(8080).then(console.log("server is running"))