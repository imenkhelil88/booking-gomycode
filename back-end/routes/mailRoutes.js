const router= require("express").Router()
const MailController= require("../controllers/MailController")

router.post("/api/sendMail",MailController.nodemail)
module.exports={mailRouter:router}