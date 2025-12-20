const http = require("http");
const fs = require("fs");

const style = `
<style>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #1d2671, #c33764);
  color: #333;
}

nav {
 background: linear-gradient(135deg, #1d2671, #c33764);
  padding: 16px;
  text-align: center;
  
}

nav a {
  color: white;
  margin: 0 18px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
}

nav a:hover {
  color: #ffcc70;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
}

.card {
  background: white;
  padding: 35px;
  border-radius: 18px;
  width: 380px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.35);
  animation: fadeUp 0.6s ease;
}

h1, h2 {
  text-align: center;
}

p {
  text-align: center;
  line-height: 1.7;
}

input, textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #1d2671, #c33764);
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

.entry {
  background: white;
  padding: 22px;
  border-radius: 14px;
  margin: 25px auto;
  max-width: 420px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.25);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
`;

const navbar = `
<nav>
  <a href="/">Home</a>
  <a href="/feedback">Write Review</a>
  <a href="/reviews">Reviews</a>
</nav>
`;

const server = http.createServer((req, res) => {

  /* HOME */
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <meta charset="UTF-8">
      ${style}
      ${navbar}
      <div class="center">
        <div class="card">
          <h1>Welcome </h1>
          <p>
            Share your honest experience and read what others think.
            Your feedback helps improve quality and builds trust.
          </p>
          <p>
            Click below to write your review or explore community reviews.
          </p>
          <button onclick="location.href='/feedback'">Write a Review ⭐</button>
        </div>
      </div>
    `);
  }

  /* FEEDBACK */
  if (req.url === "/feedback" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <meta charset="UTF-8">
      ${style}
      ${navbar}
      <div class="center">
        <form class="card" method="POST" action="/getdata">
          <h2>Write a Review ✨</h2>
          <input name="name" minlength="6" required placeholder="Your Name">
          <textarea name="message" minlength="10" required placeholder="Your Review"></textarea>
          <button>Submit Review</button>
        </form>
      </div>
    `);
  }

  /* SAVE */
  if (req.url === "/getdata" && req.method === "POST") {
    let body = [];
    req.on("data", c => body.push(c));
    req.on("end", () => {
      const data = Object.fromEntries(new URLSearchParams(Buffer.concat(body).toString()));
      let users = fs.existsSync("user.txt")
        ? JSON.parse(fs.readFileSync("user.txt", "utf-8") || "[]")
        : [];
      users.push(data);
      fs.writeFileSync("user.txt", JSON.stringify(users, null, 2));
      res.writeHead(302, { Location: "/reviews" });
      res.end();
    });
  }

  /* REVIEWS */
  if (req.url === "/reviews" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    let users = fs.existsSync("user.txt")
      ? JSON.parse(fs.readFileSync("user.txt", "utf-8") || "[]")
      : [];

    res.write(`
      <meta charset="UTF-8">
      ${style}${navbar}<h2>User Reviews ⭐</h2>`);

    if (users.length === 0) {
      res.end(`
        <div class="entry" style="text-align:center">
          <h3>No reviews yet ✨</h3>
          <p>Be the first to share your experience.</p>
          <button onclick="location.href='/feedback'">Write Review</button>
        </div>
      `);
      return;
    }

    users.slice().reverse().forEach((u, i) => {
      const realIndex = users.length - 1 - i;
      res.write(`
        <div class="entry">
          <b>Name:</b> ${u.name}<br><br>
          <b>Review:</b> ${u.message}<br><br>
          <form method="POST" action="/delete">
            <input type="hidden" name="id" value="${realIndex}">
            <button>Delete</button>
          </form>
          <form method="GET" action="/edit">
            <input type="hidden" name="id" value="${realIndex}">
            <button>Edit</button>
          </form>
        </div>
      `);
    });
    res.end();
  }

  /* DELETE */
  if (req.url === "/delete" && req.method === "POST") {
    let body = [];
    req.on("data", c => body.push(c));
    req.on("end", () => {
      const id = Number(new URLSearchParams(Buffer.concat(body).toString()).get("id"));
      let users = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
      users.splice(id, 1);
      fs.writeFileSync("user.txt", JSON.stringify(users, null, 2));
      res.writeHead(302, { Location: "/reviews" });
      res.end();
    });
  }

  /* EDIT */
  if (req.url.startsWith("/edit") && req.method === "GET") {
    const id = new URL("http://x" + req.url).searchParams.get("id");
    const users = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
    const u = users[id];

    res.end(`
      ${style}
      ${navbar}
      <div class="center">
        <form class="card" method="POST" action="/update">
          <h2>Edit Review</h2>
          <input type="hidden" name="id" value="${id}">
          <input name="name" value="${u.name}" required>
          <textarea name="message" required>${u.message}</textarea>
          <button>Update Review</button>
        </form>
      </div>
    `);
  }

  /* UPDATE */
  if (req.url === "/update" && req.method === "POST") {
    let body = [];
    req.on("data", c => body.push(c));
    req.on("end", () => {
      const data = new URLSearchParams(Buffer.concat(body).toString());
      const id = Number(data.get("id"));
      let users = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
      users[id] = { name: data.get("name"), message: data.get("message") };
      fs.writeFileSync("user.txt", JSON.stringify(users, null, 2));
      res.writeHead(302, { Location: "/reviews" });
      res.end();
    });
  }
});

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
