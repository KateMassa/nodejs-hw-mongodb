// import { HttpError } from 'http-errors';

export const notFoundHandler = (err, req, res) => {
  // if (err instanceof HttpError) {
  //   res.status(err.status).json({
  //     status: err.status,
  //     message: err.name,
  //     data: err,
  //   });
  //   return;
  // }
  res.status(404).json({
    status: 404,
    message: 'Contact not found',
    error: err.message,
  });
};
