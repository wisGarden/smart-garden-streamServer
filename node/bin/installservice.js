var Service = require('../node_modules/node-windows').Service;
var svc = new Service({
    name: 'EasyDSS_Solution_NODE',
    description: 'EasyDSS_Solution一站式流媒体解决方案，该服务是Nodejs后台管理服务，感谢您的使用！',
    script: require('path').join(__dirname, '../../easydss.js')
});
svc.on('install', function() {
    svc.start();
});
svc.install();