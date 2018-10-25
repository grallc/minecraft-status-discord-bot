const mcping = require('mc-ping-updated');

const ip = 'uhc.corentin.us';

mcping(ip, 25565, function(err, res) {
	if (err) {
    		// Some kind of error
    		console.error(err);
	} else {
    		// Success!
            console.log(res);
	}
}, 3000);