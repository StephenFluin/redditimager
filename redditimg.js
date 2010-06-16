function fix(element) {
	if(element) {
		var url = element.href;
		if(url.substr(-4,4) == ".jpg") {
			element.innerHTML = '<img src="' + url + '" style="max-width:100%;z-index:4000;"/>';
			element.style["overflow"] = "inherit";
			element.style["width"] = "inherit";
		}
	} else {
		console.error("Reddit Imager extension tried to hook up something that doesn't make sense.");
	}
}
function fixImages(rep, now) {
	var list = $("[href^=http://" + rep + ".com] > img");
	list = list.parent();
	for(i = 0;i<list.length;i++) {
		if(now) {
			fix(list[i]);
		} else {
			list[i].onclick = function() {fix(this);return false;}
		}
		
	}
	//console.log("Completed fixing images for " + rep + " (found " + list.length + ")");
}

// Check settings through background page
chrome.extension.sendRequest({action:"check_options"}, function(response) {
	// Detect whether to activate the event now, or hook it up for later.
	var now = response.mode != "Activated";
	fixImages("imgur", now);fixImages("i.imgur", now);
	
});



