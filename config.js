exports = module.exports = {
    init: {
        port: 2012
    },
    db: {
        url: process.env.API || 'http://api.daoapp.io/', //使用nodejs编写的数据库接口文件,数据是非关系型的mongodb,具体项目地址:https://github.com/Ireoo/api.mongodb.nodejs
        key: process.env.KEY || 'test'
    }
};