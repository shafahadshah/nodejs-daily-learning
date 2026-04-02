const formatResponse = (data) => {
  return {
    success: true,
    count: data.length,
    data
  };
};

module.exports = { formatResponse };