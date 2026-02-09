const fs = require("fs");
const FILE = "./data.json";

// Read JSON file
function readData() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

// Write JSON file
function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

// Add new record
function addUser(name, age) {
  const data = readData();
  data.push({ id: Date.now(), name, age });
  writeData(data);
  console.log("User added");
}

// List records
function listUsers() {
  const data = readData();
  console.table(data);
}

// Update record
function updateUser(id, newAge) {
  const data = readData();
  const user = data.find(u => u.id === id);
  if (!user) return console.log("User not found");

  user.age = newAge;
  writeData(data);
  console.log("User updated");
}

// Delete record
function deleteUser(id) {
  const data = readData().filter(u => u.id !== id);
  writeData(data);
  console.log("User deleted");
}

// Demo calls
addUser("Alice", 25);
addUser("Bob", 30);
listUsers();
