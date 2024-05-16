const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const asyncHandler = require('express-async-handler')
const multer = require("multer")
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');


exports.getAllRepas = asyncHandler(async(req,res)=>{
    const getCategories = await prisma.categories.findMany()
    res.render("addRepas",{title:"addRepas",categories:getCategories,csrfToken:req.csrfToken()})
})

const multerStorage = multer.memoryStorage()

function multerFilter (req, file, cb) {
   
    if(file.mimetype.startsWith("image")){
        cb(null, true)
    }else{
        cb(new Error('I don\'t have a clue!'))
    }
  
}
const upload = multer({storage:multerStorage,fileFilter:multerFilter})
exports.uploadRepasImage = upload.single("url_image")
exports.resizeImage = async(req ,res,next)=>{
  const fileName = `repas-${uuidv4()}-${Date.now()}.jpeg`
   await sharp(req.file.buffer).resize(600,600).toFormat("jpeg").
   jpeg({quality:90}).toFile(`public/img/repas/${fileName}`)
   req.body.url_image = `http://localhost:8000/img/repas/${fileName}`
   next()
}



exports.addRepasControler = asyncHandler(async(req,res)=>{
   const addOneRepas = await prisma.repas.create({
        data:{
            titre:req.body.nom ,
            description:req.body.description ,
            prix :Number(req.body.prix),
            image:req.body.url_image,
            nameCat:req.body.id_categorie,
            restoron_id : 1,
        }
    })
   res.redirect("/")
   res.status(200).json(addOneRepas)
   
})