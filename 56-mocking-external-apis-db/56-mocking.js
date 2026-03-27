const { fetchUser } = require("./apiService");
const { getUserFromDB } = require("./dbService");

async function getUserData(id) {
  const apiUser = await fetchUser(id);
  const dbUser = await getUserFromDB(id);

  return {
    ...apiUser,
    ...dbUser
  };
}

module.exports = { getUserData };