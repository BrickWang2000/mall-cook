/*
 * @Description: What's this for
 * @Autor: WangYuan
 * @Date: 2021-08-17 14:28:29
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-03-02 15:13:34
 */
const tools = require('../utils/tools')
const multer = require('koa-multer');
const Router = require('koa-router')
const config = require('../config')

const router = new Router()
// routes/upload.js
// 额外引入这几个模块
const path = require('path')
const fs = require('fs')
const dayjs = require('dayjs')

// 创建文件夹
function mkdirsSync(dirname) {
    if(fs.existsSync(dirname)) {
        return true
    } else {
        if(mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}

//文件上传
var storage = multer.diskStorage({
  //文件保存路径
    destination: function (req, file, cb) {
        // appjs中koa-static配置目录为public,因此上传目录放public; 也可以配置koa-static
        const filePath = `${path.resolve('./public')}/img/${dayjs(Date.now()).format('YYYYMMDD')}`
        // 递归创建多级
        if(mkdirsSync(filePath)) {
            cb(null, filePath)
        }
    },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({ storage: storage });


//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
      data: `${config.serviceApi}/img/${dayjs(Date.now()).format('YYYYMMDD')}/${ctx.req.file.filename}`,
      errorCode: "00000",
      message: "请求成功",
  }
  ctx.status = 200
})

module.exports = router

