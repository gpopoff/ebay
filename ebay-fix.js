//edited
// get ebayItemID if undefined
if (typeof ebayItemID === 'undefined') {
	var ebayItemID = $('#descItemNumber').text();
}

if (document.URL.indexOf('ebaydesc')>-1) {
	if (navigator.userAgent.toUpperCase().indexOf('.NET') > -1 || navigator.userAgent.toUpperCase().indexOf('MSIE') > -1) {
		// get ebay category ID if in iframe and is not IE
		var ebayCategoryID = document.URL.split('category=')[1].split('&')[0];
		var ebaySellerID = document.URL.split('seller=')[1].split('&')[0];
	} else {
		// get ebay category ID if in iframe and is IE
		var ebayCategoryID = document.documentURI.split('category=')[1].split('&')[0];
		var ebaySellerID = document.documentURI.split('seller=')[1].split('&')[0];
	}
} else {
	// get ebay category ID if not in iframe
	var breadCrumbArray = $('.vi-VR-brumblnkLst li').last().find('a').attr('href').split('/i.html')[0].split('/');
	var ebayCategoryID = breadCrumbArray[breadCrumbArray.length-1];
	// get ebay seller ID if not in iframe
	var ebaySellerID = $('.mbg-nw').text();
}
