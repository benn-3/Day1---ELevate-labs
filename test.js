// test.js
// Very simple test to check if app.js works

const createServer = require('./app');
const http = require('http');

const server = createServer();

server.listen(3000, () => {
  http.get('http://localhost:3000', res => {
    if (res.statusCode === 200) {
      console.log("✅ Test passed: Server responded with 200 OK");
      server.close(() => process.exit(0));
    } else {
      console.error("❌ Test failed: Wrong status code", res.statusCode);
      server.close(() => process.exit(1));
    }
  }).on('error', err => {
    console.error("❌ Test failed: Error during request", err);
    server.close(() => process.exit(1));
  });
});
