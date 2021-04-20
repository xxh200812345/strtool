var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer(function(request, response) {

    // 解析请求，包括文件名
    const mUrl = new URL(request.url, `http://${request.headers.host}`);
    const pathname = decodeURI(mUrl.pathname);

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    let tmp = pathname.split('.');
    const type = tmp[tmp.length - 1];
    console.log(type);

    let contentType = 'text/html;charset=UTF-8';

    switch (type) {
        case 'js':
            contentType = 'application/javascript';
            break;
        case 'css':
            contentType = 'text/css';
            break;
        case 'jpg':
            contentType = 'image/jpeg';
            break;
        case 'gif':
            contentType = 'image/gif';
            break;
        case 'png':
            contentType = 'image/png';
            break;

        default:
            break;
    }

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/html
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/html
            response.writeHead(200, { 'Content-Type': contentType });

            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
}).listen(8080);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');
