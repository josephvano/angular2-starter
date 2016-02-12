const production = process.env.NODE_ENV === "production";

const config = {
  production: production
};

config.express ={
  port: process.env.PORT  || 3009,
  ip:   process.env.IP    || "127.0.0.1"
};

config.db = {
  port:   process.env.DB_PORT   || 3306,
  host:   process.env.DB_IP     || "localhost"
};

// TODO: configure subsystems

module.exports = config;
