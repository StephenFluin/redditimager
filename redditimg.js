function fixImages(rep) {
	var list = $("[href^=http://" + rep + ".com] > img");
	list = list.parent();
	for(i = 0;i<list.length;i++) {
		var url = list[i].href;
		list[i].innerHTML = '<img src="' + url + '"/>';
		list[i].style["overflow"] = "inherit";
		list[i].style["z-index"] = "4000";
	}
	list.length;
}fixImages("imgur");fixImages("i.imgur");
