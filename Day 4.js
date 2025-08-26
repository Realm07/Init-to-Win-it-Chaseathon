import http from "http";

const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end('Hellow, World! ')
})


server.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
