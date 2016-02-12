let config = {};

function notFound(req, res, next){
  var err = new Error("Not Found");
  err.status = 404;
  err.message = "Not Found";

  next(err);
}

function generalError(err, req, res, next){
  let error = err;
  const status = err.status || 500;

  // Don't let stack trace leak in production
  if(config.production){
    error = {};
  }

  res
    .status(status)
    .render("errors/error", {
      message: err.message,
      status: status,
      error: error
    });
}

export default function(app, cfg){
  config = cfg;
  app.use(notFound);
  app.use(generalError);
}

