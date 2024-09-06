// const multer = require("multer")

// const storage = multer.diskStorage({
//     destination : (req,file,cb)=>{
//         cb(null,"uploads/")
//     },
//     filename : (req,file,cd)=>{
//         cd(null,file.fieldname+ "-" + DataTransfer.now())
//     }
// })

// const uploadpic = multer({storage: storage}).single("image");

const { model } = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    }
});

const uploadpic = multer({ storage: storage }).single("poster");

module.exports = uploadpic