const notFound = (req, res, next) => {
  //there was no route defined, so will catch all routes not already routed
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  //express looks for this middleware on all errors from other routes
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });

  next();
};

export { notFound, errorHandler };
