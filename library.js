(function(module) {
	"use strict";
	// responsive format found at http://avexdesigns.com/responsive-youtube-embed/
	var Youtube = {},
		embed = '<div class="video-container"><iframe class="youtube-plugin" width="640" height="360" src="//www.youtube.com/embed/$1?wmode=opaque" allowfullscreen></iframe></div>';

	Youtube.parse = function(postContent, callback) {
		// modified from http://stackoverflow.com/questions/7168987/
		var	regularUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)">.+<\/a>/g,
			embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)youtube.com\/embed\/([\w\-_]+)">.+<\/a>/;

		if (postContent.match(embedUrl)) {
			postContent = postContent.replace(embedUrl, embed);
		} else if (postContent.match(regularUrl)) {
			postContent = postContent.replace(regularUrl, embed);
		}

		callback(null, postContent);
	};

	module.exports = Youtube;
}(module));
