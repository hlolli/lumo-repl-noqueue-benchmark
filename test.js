const spawn = require('child_process').spawn;
const net = require('net');


const lumoConnection = new net.Socket();

var lumoProcess = spawn('./node_modules/lumo-cljs/bin/lumo',
			['-n', '5555']);


lumoProcess.stdout.on('data', (data) => {
    console.log(`${data}`);
});

lumoProcess.stderr.on('data', (data) => {
    console.log(`${data}`);
});

lumoProcess.on('close', (code) => {
    console.log(`lumoProcess exited with code ${code}`);
});

lumoProcess.on('exit', function() {
    lumoProcess.kill();
});

var cleanExit = function() {
    console.log('Quitting lumo');
    lumoProcess.exit(0);
};

lumoConnection.on('data', function(data) {
    console.log(data.toString('utf8'));
});


setTimeout(() => {
    lumoConnection.connect(5555, 'localhost', ()=>{});
    lumoConnection.write(`(require 'audioplayer)\n`);
}, 2000);


setTimeout(()=> {
    setInterval(()=> {
	lumoConnection.write(`(println "Everything ok when long time is between")\n`);
    } , 100);} , 2200);

setTimeout(()=> {
    setInterval(()=> {
	lumoConnection.write(`(println "Short time, processes get distracted")\n`);
    } , 1);} , 5200);


lumoProcess.on('SIGINT', cleanExit); // catch ctrl-c

lumoProcess.on('SIGTERM', cleanExit); // catch kill
