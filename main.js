(function () {
	'use strict';
    window.handleRssPost = function (data) {
		if(data.query.results !== null) {
			var item = data.query.results.rss.channel.item;
			var link = document.createElement('a');
			link.href = item.link.replace(/\?source=rss.*$/, '');
			link.target = "_blank";
			link.textContent = item.title;
			var container = document.querySelector('#latest-blog-post');
			container.appendChild(link);
			container.classList.add('visible');
		}
		
	};
})();