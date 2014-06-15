// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({
	    active: true,               // Select active tabs
	    lastFocusedWindow: true     // In the current window
	}, function(array_of_Tabs) {
	    // Since there can only be one active tab in one active window, 
	    //  the array has only one element
	    var tab = array_of_Tabs[0];
	    // Example:
	    var url = tab.url;
	    chrome.tabs.update({url: url+"/dev/build"});
	}); 
});
