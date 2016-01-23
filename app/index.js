import express from "express"
import path from "path";
import notFound from "./errors/notFound";
import config from "./config";
import morgan from "morgan";
import routes from "./routes";

let app = express();
const www = path.resolve("../", "wwwroot");

app.use(morgan("combined"));

// view setup
app.set("views", __dirname);
app.set("view engine", "jade");

if(!config.production){
  app.use(express.static(www));
}

// Routers
routes(app);

// Error handlers
app.use(notFound);

export default app;
