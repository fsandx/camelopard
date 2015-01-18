//Camelopard demo
// Find IP adress of camera through: nmap -sn 192.168.1.0/24
// Run: node demo/camelopard-demo.js

var camelopard = require('../index.js');
var myConfig = {brand: 'Axis', ip: '192.168.1.68', username: 'camelopard', password: 'pass'};
camelopard.image.download(myConfig, function (err) {
	if (err !== undefined) {console.log('Error!' + err)}
	else {console.log('Image file downloaded!')}
});