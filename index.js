const server = require('./server.js');

const PORT = process.env.PORT || 4444;

server.listen(PORT, () => {
  console.log(`*^^* ~~API IS LIVE ON PORT ${PORT}~~ *^^*`);
});