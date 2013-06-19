
function fix(element) {
	if(element) {
		var url = element.href;
		if(url.length == 22) {
			url = url + ".jpg";
		}
		if(url.substr(-4,4) == ".jpg" || url.substr(-4,4) == ".png" || url.substr(-4,4) == ".gif" || url.substr(-5,5) == ".jpeg" || url.length == "24") {
			element.innerHTML = '<img src="' + url + '" style="max-width:100%;z-index:4000;"/>';
			element.style["overflow"] = "inherit";
			element.style["width"] = "inherit";
		} else {
			console.log("couldn't match an image in the url: " + url + ". Length was " + url.length);
		}
	} else {
		console.error("Reddit Imager extension tried to hook up something that doesn't make sense.");
	}
}
function fixImages(rep) {
	var list = $("[href^=http://" + rep + ".com] > img");
	list = list.parent();
	for(i = 0;i<list.length;i++) {
		fix(list[i]);
		
	}
	//console.log("Completed fixing images for " + rep + " (found " + list.length + ")");
}

// Check settings through background page
//chrome.extension.sendRequest({action:"check_options"}, function(response) {
	// Detect whether to activate the event now, or hook it up for later.
	//var now = response.mode != "Activated";
	fixImages("imgur");
	fixImages("i.imgur");
	
//});

