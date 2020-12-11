const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    // app.use(createProxyMiddleware("/api",{
    //     target: "http://10.119.9.106:8080/",
    //     changesOrigin:true,
    //     pathRewrite: {
    //         "^/api": ""
    //     }
    // }))
    
    app.use(createProxyMiddleware("/devapi",{
        target: "http://10.119.9.106:8081/",
        changesOrigin:true,
        pathRewrite: {
            "^/devapi": ""
        }
    }))
}