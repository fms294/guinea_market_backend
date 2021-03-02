// // const fs = require("fs");
// const AWS = require("aws-sdk");
//
// // Enter copied or downloaded access ID and secret key here
// const ID = "AKIAI3T7WEZHK4BP5FSA";
// const SECRET = "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";
//
// // The name of the bucket that you have created
// const BUCKET_NAME = "guineamarket";
//
// const s3 = new AWS.S3({
//     accessKeyId: ID,
//     secretAccessKey: SECRET
// });

// const uploadFile = (fileName) => {
//     // Read content from the file
//     // const fileContent = fs.readFileSync(fileName);
//
//     // Setting up S3 upload parameters
//     const params = {
//         Bucket: BUCKET_NAME,
//         Key: 'cat.jpg', // File name you want to save as in S3
//         // Body: fileContent
//     };
//
//     // Uploading files to the bucket
//     s3.upload(params, function(err, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(`File uploaded successfully. ${data.Location}`);
//     });
// };

// module.exports = uploadFile();
