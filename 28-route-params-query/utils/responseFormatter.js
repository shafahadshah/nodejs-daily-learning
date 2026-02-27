const successResponse = (data) => {
  return {
    success: true,
    count: Array.isArray(data) ? data.length : 1,
    data
  };
};

const errorResponse = (message) => {
  return {
    success: false,
    message
  };
};

module.exports = { successResponse, errorResponse };