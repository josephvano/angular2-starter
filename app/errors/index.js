function notFound(req, res, next){
  var err = new Error("Not Found");
  err.status = 404;
  err.message = "Not Found";

  next(err);
}

function generalError(err, req, res, next){
  const status = err.status || 500;

  res
    .status(status)
    .render("errors/error", {
      message: err.message,
      status: status,
      error: err
    });
}

export default function(app){
  app.use(notFound);
  app.use(generalError);
}

