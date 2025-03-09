/*
 * @Description: 配置信息
 * @Autor: WangYuan
 * @Date: 2022-02-10 19:20:33
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-11-02 10:35:50
 */
config = {
  appid: 'wx36586337e314314c', // 小程序appId
  secret: '212f588f568fa0922cec5ecdb0238029', // 小程序secret
  serviceApi: 'http://127.0.0.1:3000', // 服务器地址
  mongodbUrl: 'mongodb://root:123456@122.152.215.158:27017/mall-cook1', // mongodb数据库地址 格式：mongodb://username:password@host:port/name
  jwtSecret: 'secret'
}

module.exports = config
