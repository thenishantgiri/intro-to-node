import http from "http";

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("close", () => {
      // this is where we write data in our database
      console.log(JSON.parse(body));
    });

    res.writeHead(201);
    res.end("operation successful!");
  } else {
    res.writeHead(200);
    res.end("hello there!");
  }
});

server.listen(port, host, () => {
  console.log(`Server is listening on ${host}:${port}`);
});
