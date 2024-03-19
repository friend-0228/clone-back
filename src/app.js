import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import postRouter from './posts/router/posts.router.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// CORS 미들웨어 설정
app.use(
    cors({
        origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
    }),
);

// 라우터 설정
https: app.use('/', [postRouter]);

app.listen(PORT, () => {
    console.log(`${PORT} 포트로 서버가 열렸어요!`);
});