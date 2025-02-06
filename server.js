const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

// 設定 Express 提供靜態檔案（HTML、CSS、JS）
app.use(express.static(path.join(__dirname)));

// 讓根路徑 `/` 提供 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
