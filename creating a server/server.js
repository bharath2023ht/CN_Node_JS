// Create a Server using NodeJS.

// 1.Import HTTP http library/module
const http = require ('http');

// 2. Create Server
const server = http.createServer ((req, res) => {
  // Here comes the request
  res.end ('Welcome to NodeJS Hasna Server.');
});

// 3. Specify a PORT to listen to Client's requests.
server.listen (3000, () => {
  console.log ('Server is listening to PORT 3000');
});
