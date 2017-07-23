#show-info
Pull information on tv shows 

#installation 
`npm install show-info`

#Usage
Pass the show-info function a string for the show to get, the final object will be passed to the callback function.

`var show_info = require('show_info');`

`show_info('rick and morty', function(show){
	console.log(show.img);
});`

#Object values

show.img //A link to an image of that show 

show.air_day //The day of the week the show is aired

show.episode_guide //Link to the episode guide

show.description //A description of the show 

show.show_name //The offical show name
