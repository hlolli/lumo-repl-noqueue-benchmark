var player = require('play-sound')(opts = { players: ['aplay',
						      'afplay',
						      'mplayer',
						      'play',
						      'omxplayer',
						      'cmdmp3']})

const octave = ['wav/60.wav',
		'wav/61.wav',
		'wav/62.wav',
		'wav/63.wav',
		'wav/64.wav',
		'wav/65.wav',
		'wav/66.wav',
		'wav/67.wav',
		'wav/68.wav',
		'wav/69.wav',
		'wav/70.wav',
		'wav/71.wav',
		'wav/72.wav']

var index = 0;

setInterval(()=> {
    player.play(octave[index], ()=>{});
    index = (index + 1) % octave.length;
}, 200);

setInterval(()=> {
    console.log('stupid test');
}, 1);


