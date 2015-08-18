/* =========================================================
 * css fullscreen file => created by kevin hu
 * ========================================================= */
(function(window, document){

	var fullScreen = fullScreen || {
		setting: {
			link: document.getElementById("container")
		},
		showFullScreen: function(element){
	    if (element.requestFullScreen) {
	        element.requestFullScreen();
	    } else if (element.webkitRequestFullScreen) {
	        element.webkitRequestFullScreen();
	    } else if (element.mozRequestFullScreen) {
	        element.mozRequestFullScreen();
	    }
	    // link = document.getElementById("container");
	    fullScreen.setting.link.removeAttribute("onclick");
	    fullScreen.setting.link.setAttribute("onclick", "fullScreen.cancelFullScreen()");
		},
		cancelFullScreen: function(){
	    if (document.cancelFullScreen) {
	        document.cancelFullScreen();
	    } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	    } else if (document.webkitCancelFullScreen) {
	        document.webkitCancelFullScreen();
	    } else if (document.msCancelFullScreen) {
	        document.msCancelFullScreen();
	    }
	    // link = document.getElementById("container");
	    fullScreen.setting.link.removeAttribute("onclick");
	    fullScreen.setting.link.setAttribute("onclick", "fullScreen.showFullScreen(this)");
		}
	};

	window.onload = function() {
	  var imgs = document.getElementById('slideshow').children,
	  		interval = 8000,
	  		currentPic = 0,
	  		infiniteLoop;
	  imgs[currentPic].style.webkitAnimation = 'fadey ' + interval + 'ms';
	  imgs[currentPic].style.animation = 'fadey ' + interval + 'ms';
	  // set interval loop
	  infiniteLoop = setInterval(function(){
	    imgs[currentPic].removeAttribute('style');
	    if(currentPic == imgs.length - 1)
	    	currentPic = 0;
	    else
	    	currentPic++;
	    imgs[currentPic].style.webkitAnimation = 'fadey ' + interval + 'ms';
	    imgs[currentPic].style.animation = 'fadey ' + interval + 'ms';
	  }, interval);
	}

	window.fullScreen = fullScreen;
 	document.getElementById('container').setAttribute('onclick','fullScreen.showFullScreen(this)');

})(window, document);