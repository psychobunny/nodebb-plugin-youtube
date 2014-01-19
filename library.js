(function(module) {
	"use strict";
	// responsive format found at http://avexdesigns.com/responsive-youtube-embed/
	var Youtube = {},
		embed = '<div class="video-container"><iframe class="youtube-plugin" src="//www.youtube.com/embed/$1?wmode=opaque" allowfullscreen></iframe></div>';

	Youtube.parse = function(postContent, callback) {
		// modified from http://stackoverflow.com/questions/7168987/
		var	regularUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)(.+)">.+<\/a>/g;
		var	shortUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:youtu\.be)\/(.+)">.+<\/a>/g;
		var	embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)youtube.com\/embed\/([\w\-_]+)">.+<\/a>/;

		if (postContent.match(embedUrl)) {
			postContent = postContent.replace(embedUrl, embed);
		}
		if (postContent.match(regularUrl)) {
			postContent = postContent.replace(regularUrl, embed);
		}
		if (postContent.match(shortUrl)) {
			postContent = postContent.replace(shortUrl, embed);
		}

		callback(null, postContent);
	};

	module.exports = Youtube;
}(module));
