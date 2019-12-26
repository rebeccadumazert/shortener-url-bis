const UrlRouter = require('./routes/UrlRouter');
const UrlRedirect = require('./UrlRedirect');

const routes = app => {
  app.use('api/v1/url', UrlRouter);
  app.use('/', UrlRedirect);
};

module.exports = routes;
