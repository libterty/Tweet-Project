/** Not found err handler */
export const notFound = (req, res, next) => {
  const error = new Error('404, Page not found.')
  error.status = 404
  next(error)
}

/** default err handler */
export const logErrors = (error, req, res) => {
  res.status(error.status || 500)
  res.send(error.message)
}
