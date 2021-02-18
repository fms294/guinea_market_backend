const multer = require("multer");
const path = require("path");

const storageEngine = multer.diskStorage({
    destination: './public/files',
    filename: function(req, file, fn){
        fn(null, new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname));
    }
});

const validateFile = (file, cb ) => {
    const allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType  = allowedFileTypes.test(file.mimetype);
    if(extension && mimeType){
        return cb(null, true);
    }else{
        cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
}

const upload =  multer({
    storage: storageEngine,
    fileFilter: (req, file, callback) => {
        validateFile(file, callback);
    }
}).array('images');


module.exports = upload;

//router.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         //cb(null, 'uploads/');
//         cb(null, path.join(__dirname, '../uploads/'));
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
//

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };


//const upload = multer({ storage: storage, fileFilter: fileFilter });


// //Upload route
// router.post('/upload', upload.single('image'), (req, res, next) => {
//     try {
//         return res.status(201).json({
//             message: 'File uploaded successfully'
//         });
//     } catch (error) {
//         console.error(error);
//     }
// });
