const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) =>{
    res.send('')
})

app.use('/api', createProxyMiddleware({
    target: 'https://target-server.com', // api.ig
    changeOrigin: true,
}));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});