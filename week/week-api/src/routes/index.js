const express = require('express');
const router = express.Router();
const mongo = require("mongodb-curd");
const dbname = "monthexe";
const colname = "bdata"


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


//匹配登陆信息
router.post('/api/getuser', function (req, res, next) {
  let {
    user,
    psw
  } = req.body;
  console.log(req.body);
  if (!user || !psw) {
    res.send({code:2,msg:"参数不完整"})
  }
  mongo.find(dbname, colname, {
    user: user,
    psw: psw
  }, function (result) {
    if (!result.length) {
      res.send({
        code: 0,
        msg: "error"
      })
    } else {
      res.send({
        code: 1,
        result: result
      })
    }
  })
});


//获取用户信息
router.get('/api/getlist', function (req, res, next) {
  let {
    id:id
  } = req.query;
  if (!id) {
    res.send({code:2,msg:"参数不完整"})
  }
  mongo.find(dbname, "bbb", {
   nid:id
  }, function (result) {
    if (!result) {
      res.send({
        code: 0,
        msg: "error"
      })
    } else {
      res.send({
        code: 1,
        result: result
      })
    }
  })
});

module.exports = router;