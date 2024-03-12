//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const Eureka = require('eureka-js-client').Eureka;
const client = new Eureka({
  instance: {
    app: 'hvmatl-fall-festival-frontend',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      '$': 3000,
      '@enabled': true,
    },
    vipAddress: 'hvmatl-fall-festival-frontend',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
       name: 'MyOwn',
    },
  },
  eureka: {
    host: '18.188.96.133',
    port: 8761,
    servicePath: '/eureka/apps',
  },
});

function connectToEureka() {              
  client.logger.level('debug');  
  client.start(function(error) {
    console.log('########################################################');
    console.log(error || 'Eureka registration complete');   
  }); 
}

connectToEureka();

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});