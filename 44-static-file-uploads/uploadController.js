exports.uploadFile = (req, res) => {

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "File not uploaded"
    });
  }

  res.status(200).json({
    success: true,
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
  });

};