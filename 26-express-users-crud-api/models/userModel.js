let users = [];

const getAll = () => users;

const getById = (id) =>
  users.find(user => user.id === parseInt(id));

const create = (data) => {
  const newUser = {
    id: Date.now(),
    ...data
  };
  users.push(newUser);
  return newUser;
};

const update = (id, data) => {
  const index = users.findIndex(u => u.id === parseInt(id));
  if (index === -1) return null;

  users[index] = { ...users[index], ...data };
  return users[index];
};

const remove = (id) => {
  const index = users.findIndex(u => u.id === parseInt(id));
  if (index === -1) return null;

  return users.splice(index, 1)[0];
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};