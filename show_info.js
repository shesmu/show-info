//get image, description, release date-cancellation date, rating 
var express  = require('express'),
	request  = require('request'),
	cheerio  = require('cheerio'),
	open     = require('open');



var show_info = function(search, callback){

	url = 'http://www.tv.com/search?q=' + search;
	request(url, function (error, response, html){
		
	    $ = cheerio.load(html);

		$('.result.show').eq(0).filter(function(){
			var data = $(this),
				img = $('img').eq(1).attr('src'),
				show_name = $('h4').eq(0).text(),
				air_day = $('.tagline').eq(0).text().trim(),
				episode_guide = $('.sub_links._inline_navigation').html(),
				description = $('h4').eq(0).html().click(url);
				var show = { img:img, show_name:show_name, air_day:air_day, episode_guide:episode_guide.click(url)};
				getDescription(show, description);
		})
	})
	function getDescription(show, description) {
		request(description, function (error, response, html){
			$ = cheerio.load(html);

			$('.description').eq(0).filter(function (){
				var data = $(this),
					finalDescription = data.text().trim();
					show.description = finalDescription;
					callback(show);
			})
		})
	}
}	

var click = String.prototype.click = function(url, passedFunction) {
	var rawPointer = String.prototype.constructor(this),
		parsedPointer = rawPointer.slice(rawPointer.indexOf('href=') + 6, rawPointer.indexOf('\">')),
		baseUrl = url.slice(0, url.indexOf('/', 7));
	
	if(parsedPointer.indexOf('http') != -1){
		var finalUrl = parsedPointer; 
	}
	else{
		var finalUrl = baseUrl + parsedPointer;
	}
	return  finalUrl;
}

module.exports = show_info;
