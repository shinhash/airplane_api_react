const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        "/test",
        createProxyMiddleware({
            target          : "http://localhost:8099",
            changeOrigin    : true,
            pathRewrite     : (path) => path.replace(/^\/test/,''),
        }),
    );
}