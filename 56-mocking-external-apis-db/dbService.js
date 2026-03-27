async function getUserFromDB(id) {
  return {
    id,
    role: "user"
  };
}

module.exports = { getUserFromDB };