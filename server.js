let http = require('http');
let url = require('url');

function start (route,handle) {
  function onRequest (request, response) {
    let pathName = url.parse(request.url).pathname;
    console.log("Request for " + pathName + " received.");
    route(handle,pathName,response);
  }
  http.createServer(onRequest).listen(8888);
  console.log('server has started');
  
}

exports.start = start;