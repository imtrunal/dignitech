const router = require('express').Router()

const{
    registerdata,
    Login,
    updatedata,
    viewdata,
    viewdatall,
    deletedata
}=require('../controller/user.controller')

router.post('/post',registerdata)
router.post('/Login',Login)
router.put("/post/:id",updatedata)
router.get("/view/:id",viewdata)
router.get("/viewall",viewdatall)
router.delete("/delete/:id",deletedata)

module.exports = router