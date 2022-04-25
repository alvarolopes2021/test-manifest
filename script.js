function badge(){
	
	var browser;
	
	if (typeof browser === "undefined") {
		browser = chrome;
	}
	
/*
		browser.browserAction.setBadgeBackgroundColor({
			color: 'red',        
		}, () => {});
	*/	
		browser.browserAction.setBadgeText({
			text: "44444"
		}, () => {});

}

badge();
		
