const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();

// 啟用 JSON 解析與 CORS
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Node.js API project');
});

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
