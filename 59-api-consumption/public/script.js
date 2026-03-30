async function fetchUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();

  const list = document.getElementById("userList");
  list.innerHTML = "";

  data.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;
    list.appendChild(li);
  });
}