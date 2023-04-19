const express = require('express')
const router = express.Router()
// const db = require('./db')
const qiniu=require("qiniu")

// 生成鉴权对象
var accessKey = 'r3CwCv7H2L_g_jj6Mbtm9MPf29Dv_ZPb9hK2u-t6';
var secretKey = 'M_Kqc28-y6enUGM3W4YjIPZYjJC6yiS3smkZvJFW';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

var options = {
  scope: "my-personal-website",
  expires: 7200
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac);



// 获取凭证
router.get('/gettoken', (req, res) => {
  res.send({
    code:200,
    data:{
      token:uploadToken
    }
  })
})


module.exports = router
