const express = require('express');
const router = express.Router();

exports = module.exports = router;

router.all('/', (req, res, next) => {
    res.send('本程序为了增强对本地文件的读写权限，由原来的html5转变为 html5 + node-webkit，演示程序在exe文件夹中的app.exe文件，源文件在source文件夹中。<br />可以直接打开app.exe文件，也可以通过<a href="https://github.com/nwjs/nw.js" target="_blank">https://github.com/nwjs/nw.js</a>下载相应的平台来运行源文件。<br /><br /><br /><h1>提示：程序任需和服务端进行交互，请保持开启状态！！！</h1>');
});