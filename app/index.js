import express      from "express"
import path         from "path";
import notFound     from "./errors/notFound";
import config       from "./config";
import morgan       from "morgan";
import routes       from "./routes";
import bodyParser   from "body-parser";
import cookieParser from "cookie-parser";

let app = express();
const www = path.resolve(__dirname, "../", "wwwroot");

// view setup
app.set("views", __dirname);
app.set("view engine", "jade");

// middleware
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(cookieParser());

if(!config.production){
  console.log("Not in production, setting static files to be served");
  app.use(express.static(www));
}

// Routers
routes(app);

// Error handlers
app.use(notFound);

export default app;
