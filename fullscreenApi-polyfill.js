/**
 * Provide a polyfill for the FullScreen API
 * jerome.etienne@gmail.com 
 * MIT license http://jetienne.mit-license.org/
*/

if( 'webkitIsFullScreen' in document ){
	Document.prototype.cancelFullScreen	= Document.prototype.webkitCancelFullScreen;
	HTMLElement.prototype.requestFullScreen	= HTMLElement.prototype.webkitRequestFullScreen;
	document.__defineGetter__("isFullScreen", function(){ return document.webkitIsFullScreen;	});
	document.__defineGetter__("fullScreen"	, function(){ return document.webkitIsFullScreen;	});
}else if( 'mozFullScreen' in document ){
	Document.prototype.cancelFullScreen	= document.mozCancelFullScreen;
	HTMLElement.prototype.requestFullScreen	= HTMLElement.prototype.mozRequestFullScreen;
	document.__defineGetter__("isFullScreen", function(){ return document.mozFullScreen;	});
	document.__defineGetter__("fullScreen"	, function(){ return document.mozFullScreen;	});
}