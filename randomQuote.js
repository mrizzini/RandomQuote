var quoteInfo = {
	quotes: ['"I may be small. I may be a girl, but I won’t be knitting by the fire while I have men fight for me."', '"A wise man once said a true history of the world is a history of great conversations in elegant rooms"', '"Chaos isn\'t a pit. Chaos is a ladder. Many who try to climb it fail, and never get to try again. The fall breaks them. And some are given a chance to climb. They cling to the real or the gods or love. Only the ladder is real. The climb is all there is."', '"Winter is coming"', '"You know nothing, Jon Snow"', '"This isn\'t about noble houses. This is about the living and the dead."', '"There is only one war that matters: the great war... and it is here."', '"When people ask you what happened here tell them the North remembers. Tell them winter came for House Frey."', '"There\'s a mountain, looks like an arrowhead. The dead are marching past."', '"That thing you dragged here, I know what it is, I know what it means. And when it came at me, I didn\'t think about the world, not at all. As soon as it opened its mouth, the world disappeared for me, right down its black throat. All I could think about was keeping those gnashing teeth away from the ones who matter most, away from my family. Maybe Euron Greyjoy had the right idea. Get on a boat, take those who matter..."', '"Your words will disappear. Your house will disappear. Your name will disappear. All memory of you will disappear."', '"DraCODESS!!!"'],
	authors: ['-Lyanna Mormont', '-Tyrion Lannister', '-Petyr Baelish', '-Ned Stark', '-Ygritte', '-Jaime Lannister', '-Jon Snow', '-Arya Stark', '-Sandor \'The Hound\' Clegane', '-Cersei Lannister', '-Sansa Stark', '-Daenerys Targaryen/Arnell Millhouse'],
	background: ["http://www.indiewire.com/wp-content/uploads/2016/06/lady-mormont.png", "http://watchersonthewall.com/wp-content/uploads/2017/08/Tyrion-Lannister-Eastwatch.jpg", "https://patricksponaugle.files.wordpress.com/2017/09/baelish-1.jpeg", "https://cdn.business2community.com/wp-content/uploads/2016/04/Stark-with-ice.jpg", "https://d1nao0k9edgivc.cloudfront.net/wp-content/uploads/2013/03/Game-Of-Thrones-Season-3-Jon-Snow-Ygritte.jpg", "http://nerdist.com/wp-content/uploads/2016/06/jamie-lannister-bronn-full.jpg", "http://cdn3.thr.com/sites/default/files/2017/08/helen_sloan_-_hbo_photo_6-h_2017_0.jpg", "https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.jpg", "http://www.asoiaf-theories.com/wp-content/uploads/2017/01/the-hound-hbo-game-of-thrones-azor-ahai.jpg", "http://baysidejournal.com/wp-content/uploads/2015/04/feature6.jpg", "http://cdn1.thr.com/sites/default/files/2016/06/got609_091715_hs_dsc_74061-h_2016.jpg", "https://media1.popsugar-assets.com/files/thumbor/WpVVMLKFEZ49Zid_XGOuiizFaq0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/08/07/837/n/1922283/9a6efc1e5988ba327de7c0.60110737_edit_img_cover_file_14344989_1502132259/i/Reactions-Daenerys-Saying-Dracarys-Game-Thrones.jpg"],
	generateQuote: function() {
		var randomNumber = Math.floor(Math.random() * (this.quotes.length));
		document.getElementById('quoteInsert').innerHTML = this.quotes[randomNumber];
		document.getElementById('authorInsert').innerHTML = this.authors[randomNumber];
		document.getElementById('bgimg').src = this.background[randomNumber];
	},
	tweet: function() {
		window.open('https://twitter.com/intent/tweet?hashtags=SiliconRhode&related=&text=' + document.getElementById("quoteInsert").textContent + " " + document.getElementById("authorInsert").textContent + ".");
	}
};

document.getElementById('quoteBtn').onclick = function () {
	quoteInfo.generateQuote();
};


document.getElementById('twitterBtn').onclick = function () {
	quoteInfo.tweet();
};
