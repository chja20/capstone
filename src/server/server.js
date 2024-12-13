const express = require('express');
const { Configuration, OpenAIApi } = require('openai'); 
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

const corsOptions = {
    origin: 'http://localhost:3000',  // React 앱의 URL
    methods: ['GET', 'POST'],         // 허용할 HTTP 메소드
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // 허용할 헤더
};

app.use(cors(corsOptions));  // CORS 미들웨어 적용
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',  // 최신 모델 사용
            messages: [{ role: 'user', content: message }],
        });

        const botReply = response.data.choices[0].message.content;
        res.json({ reply: botReply });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error communicating with OpenAI API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
