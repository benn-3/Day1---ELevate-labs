// app.js
// Simple Node.js HTTP server

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js app\n');
  });
}

// Run the server only if this file is run directly
if (require.main === module) {
  const port = process.env.PORT || 3000;
  const server = createServer();
  server.listen(port, () => console.log(`Server running on port ${port}`));
} else {
  module.exports = createServer;
}
