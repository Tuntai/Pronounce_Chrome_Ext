var menuItem = {
	"id" : "Pronounce",
	"title" : "Pronounce",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);



chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == "Pronounce" && clickData.selectionText){
		chrome.tts.speak(clickData.selectionText, {'rate':0.75});
	}
});