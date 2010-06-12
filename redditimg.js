function fixImages(rep) {
	var list = $("[href^=http://" + rep + ".com] > img");
	list = list.parent();
	for(i = 0;i<list.length;i++) {
		var url = list[i].href;
		if(url.substr(-4,4) == ".jpg") {
			list[i].innerHTML = '<img src="' + url + '" style="max-width:100%;z-index:4000;"/>';
			list[i].style["overflow"] = "inherit";
			list[i].style["width"] = "inherit";
		}
	}
	//console.log("Completed fixing images for " + rep + " (found " + list.length + ")");
}fixImages("imgur");fixImages("i.imgur");
