// Create web server
const server = http.createServer((req, res) => {
  // Parse URL
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method.toLowerCase();

  // Get the router
  const router = getRouter(path);

  // Check if route exists
  if (router) {
    // Call the route function
    router(req, res);
  } else {
    // Not found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Start server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});