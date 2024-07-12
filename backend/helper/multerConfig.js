const multer = require("multer")

const imgPath = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, `image-${Date.now()}.${file.originalname}`)
    }
})
//filter the image
const filterImg = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true)
    } else {
        cb(new Error("Only Image is Allow"))
    }
}
const upload = multer({
    storage: imgPath,
    fileFilter: filterImg
})

module.exports = upload;