process.env.TZ = "Asia/Shanghai";
const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = morgan('[:date[iso]] :remote-addr[:remote-user] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms');
const compress = require('compression');
const config = require('./config');

// ejs.delimiter = '?';

/**
 * 显示访问信息
 */
app.use(logger);


/**
 * 处理数据流成POST数据
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * 设置默认网页路径，并设置网页后缀
 */
app.use(compress());
app.set('views', require('path').join(__dirname, 'theme'));
app.engine('html', ejs.__express);
app.set('view engine', 'ejs');


/**
 * 设置include文件的路径
 */
app.use(express.static(__dirname + '/static'));

/**
 * 路由规则
 */
app.use('/', require('./routes/index'));
app.use('/post', require('./routes/post'));
app.use('/download', require('./routes/download'));



const server = app.listen(config.init.port || 2012, () => {
    console.log(`Listening on port ${server.address().address}:${server.address().port}`);
});