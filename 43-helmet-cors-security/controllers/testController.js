export const testEndpoint = (req, res) => {
  res.json({
    message: "Security headers active",
    cors: "Enabled"
  });
};