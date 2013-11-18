(function(module) {
	"use strict";

	var Youtube = {},
		embed = '<iframe class="youtube-plugin" width="640" height="360" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>';

	Youtube.parse = function(postContent, callback) {
		// http://stackoverflow.com/questions/7168987/
		postContent = postContent.replace(/<a href="(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = Youtube;
}(module));