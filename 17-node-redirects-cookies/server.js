const http = require("http");

const server = http.createServer((req, res) => {
  // Read cookies
  const cookies = Object.fromEntries(
    (req.headers.cookie || "")
      .split("; ")
      .filter(Boolean)
      .map(c => c.split("="))
  );

  if (req.url === "/") {
    // Set cookie
    res.setHeader("Set-Cookie", "user=John; HttpOnly; Max-Age=3600");

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page - Cookie Set");
  }

  else if (req.url === "/login") {
    // Redirect to dashboard
    res.writeHead(302, { Location: "/dashboard" });
    res.end();
  }

  else if (req.url === "/dashboard") {
    if (!cookies.user) {
      res.writeHead(302, { Location: "/login" });
      return res.end();
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Welcome ${cookies.user}`);
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
