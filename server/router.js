let express = require('express')
let router = express.Router()
const db = require('./db')
let multer = require('multer')
const crypto = require("crypto")

// 获取图片
router.get('/getimglist', (req, res) => {
  let sql = 'select * from imgs'
  db.query(sql, (err, data) => {
    if (err) {
      res.send('error' + err.message)
    }
    res.send({
      code: '200',
      data,
    })
  })
})

// 上传图片
const storage = multer.diskStorage({
  // 保存路径
  destination: function (req, file, cb) {
    let sql = 'SELECT * FROM imgs WHERE filename = ?'
    db.query(sql, [file.originalname], (err, result) => {
      if (result.length != 0) {
        // 值存在
        cb(null, '../public/uploadedImgs')
      } else {
        cb(null, '../public/repImgs')
      }
    })
  },
  // 保存在destination中的中文名
  filename: function (req, file, cb) {
    // 正则匹配后缀名
    const type = file.originalname.replace(/.+\./, '.')
    cb(null, file.fieldname + crypto.randomUUID() + type)
  },
})

const upload = multer({ storage: storage })

router.post('/profile', upload.single('file'), function (req, res) {
  if (req.file && Object.keys(req.file).length !== 0) {
    let obj = req.file
    // 信息存入数据库
    let sql = 'SELECT * FROM imgs WHERE filename = ?'
    db.query(sql, [obj.originalname], (err, result) => {
      if (err) {
        res.send('error' + err.message)
      }
      if (result.length != 0) {
        console.log('图片已存在')
        // 值存在
        res.send({
          code: 201,
          msg: '该图片已存在',
        })
      } else {
        // 保存
        let sql1 = 'INSERT INTO imgs SET ?'
        let newObj = {
          filename: obj.originalname,
          url: '',
          class: '',
          title: '',
        }
        db.query(sql1, [newObj], (err, result) => {
          if (err) {
            res.send('error' + err.message)
          }
          if (result.affectedRows > 0) {
            res.send({
              code: 200,
              msg: '上传成功',
              imgurl: obj.path,
            })
          } else {
            res.send({
              code: 301,
              msg: '上传失败',
            })
          }
        })
      }
    })
  } else {
    res.send({ code: 201, msg: '上传失败' })
  }
})

// 提交图片至数据库
router.post('/submitimg', upload.single('file'), function (req, res) {
  if (req.file && Object.keys(req.file).length !== 0) {
    let obj = req.file
    let body = req.body
    // 新增
    let newObj = {
      filename: obj.originalname,
      url: obj.path,
      class: body.class,
      title: body.title,
    }
    let sql1 = 'UPDATE imgs SET url = ?,class = ?,title = ? WHERE filename = ?'
    db.query(sql1, [newObj.url, newObj.class, newObj.title, newObj.filename], (err, result) => {
      if (err) {
        res.send('error' + err.message)
      }
      console.log('图片新增')
      if (result.affectedRows > 0) {
        res.send({
          code: 200,
          msg: '提交成功',
        })
      } else {
        res.send({
          code: 301,
          msg: '提交失败',
        })
      }
    })
  } else {
    res.send({ code: 201, msg: '提交失败' })
  }
})

module.exports = router
