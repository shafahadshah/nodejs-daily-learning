const API = "http://localhost:3000/api/items";

async function fetchItems() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    list.appendChild(li);
  });
}

async function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: value })
  });

  input.value = "";
  fetchItems();
}

fetchItems();