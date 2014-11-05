(function(module) {
	"use strict";
	// responsive format found at http://avexdesigns.com/responsive-youtube-embed/
	var Youtube = {},
		embed = '<div class="video-container"><iframe class="youtube-plugin" src="//www.youtube.com/embed/$1?wmode=opaque" allowfullscreen></iframe></div>';

	// modified from http://stackoverflow.com/questions/7168987/
	var	regularUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)(.+)">.+<\/a>/g;
	var	shortUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:youtu\.be)\/(.+)">.+<\/a>/g;
	var	embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)youtube.com\/embed\/([\w\-_]+)">.+<\/a>/;

	Youtube.parse = function(data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}
		if (data.postData.content.match(embedUrl)) {
			data.postData.content = data.postData.content.replace(embedUrl, embed);
		}
		if (data.postData.content.match(regularUrl)) {
			data.postData.content = data.postData.content.replace(regularUrl, embed);
		}
		if (data.postData.content.match(shortUrl)) {
			data.postData.content = data.postData.content.replace(shortUrl, embed);
		}

		callback(null, data);
	};

	module.exports = Youtube;
}(module));
