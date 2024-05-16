const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const sendEmail = require("../SMTP/mail")
const asyncHandler = require('express-async-handler')

exports.getHome = asyncHandler(async(req,res)=>{
    const allrepas = await prisma.repas.findMany()
    const getRestoron = await prisma.restoron.findMany()
    const getchefes = await prisma.chefs.findMany()
    res.render("home",{title : "menu",allRepas :allrepas,restoron:getRestoron,chefs :getchefes})
})

exports.addEmailSubsc = asyncHandler(async(req,res)=>{
    await prisma.emailSubscribe.create({
        data :{email :req.body.email ,restoron_id : 1},
    })
    sendEmail({
        receipients : req.body.email,
        subject :"Welcome to our Newsletter!",
        message :"Thank you for subscribing to our newsletter. You will now receive regular updates from us"
    })
    res.redirect("/")
})