"use strict";

// ES6 stylin'
require("babel-core/register");

const app = require("./index").default;
const config = require("./config");

const port = config.express.port;
const ip  = config.express.ip;

console.info("Starting application.");

app.listen(port, ip, (err) => {

  if(err){
    console.error(`Unable to listen to connections: ${ip}:${port}`);
    process.exit(10);
  }

  console.info(`Express is listening on ${ip}:${port}`);
});
