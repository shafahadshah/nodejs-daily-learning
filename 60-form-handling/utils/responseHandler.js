// commit: add response helper
exports.success = (res, data) => {
  return res.status(200).json({
    success: true,
    data
  });
};

exports.error = (res, errors) => {
  return res.status(400).json({
    success: false,
    errors
  });
};