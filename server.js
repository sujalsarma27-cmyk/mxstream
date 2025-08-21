const express = require('express');
const request = require('request');
const app = express();

const PORT = process.env.PORT || 3000;
const STREAM_URL = "https://pubads.g.doubleclick.net/ssai/event/yeYP86THQ4yl7US8Zx5eug/master.m3u8";

app.get('/stream.m3u8', (req, res) => {
    request({ url: STREAM_URL, headers: { 'User-Agent': 'Mozilla/5.0' } }).pipe(res);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
