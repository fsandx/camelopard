//Camelopard demo
// Find IP adress of camera through: 
// nmap -sP -PA21,22,25,3389 192.168.1.0/24
// or/and: arp -a -n
// Run: node demo/camelopard-demo.js

var camelopard = require('../index.js');
var camConfig = {brand: 'Axis', ip: '192.168.0.90', username: 'root', password: 'pass'};
camelopard.image.download(camConfig, function (err, res) {
	if (err !== undefined) {console.log('Error!' + err)}
	else {
		console.log('Image file downloaded as: ' + res);
	}
});