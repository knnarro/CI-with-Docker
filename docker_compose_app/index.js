const express = require("express");
const redis = require("redis");

// 레디스 클라이언트 생성
const client = redis.createClient({
    socket: {
        host: "redis-server", // docker-compose.yml에 명시한 컨테이너 이름
        port: 6379
    }
})

const app = express();
const options = {
    host: "0.0.0.0",
    port: 8080
}

// 루트 경로로 요청이 올 때마다 1씩 증가
app.get('/', async (req, res) => {
    await client.connect();
    const number = await client.get("number")
    if(number === null){
        number = 0
    }
    res.send("숫자가 1씩 올라갑니다: "+number)
    await client.set("number", parseInt(number) + 1)
    await client.disconnect()
})

app.listen(options, () => console.log("server is running"))
