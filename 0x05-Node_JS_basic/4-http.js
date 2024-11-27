// Import the http module
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write the response body
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on http://localhost:1245');
});

// Export the app to be used elsewhere if needed
module.exports = app;
