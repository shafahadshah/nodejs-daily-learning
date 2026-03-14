const upload = require("./multerConfig");

const singleUpload = upload.single("file");

module.exports = singleUpload;