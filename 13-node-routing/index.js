const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;
  const query = parsedUrl.query;

  // GET request
  if (method === "GET" && path === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      message: "Home Page",
      queryParams: query
    }));
  }

  // GET with query params
  else if (method === "GET" && path === "/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      message: "User Data",
      name: query.name,
      age: query.age
    }));
  }

  // POST request
  else if (method === "POST" && path === "/login") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        message: "Login Success",
        username: data.username
      }));
    });
  }

  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
