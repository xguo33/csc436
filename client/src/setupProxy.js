const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',  // 假设 json-server 在此端口运行
      changeOrigin: true,
    })
  );
};
