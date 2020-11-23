const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware("/devApi",{
        target: "http://www.web-jshtml.cn/api/react",
        changesOrigin:true,
        pathRewrite: {
            "^/devApi": ""
        }
    }))
}