'use strict';

// Create the context menu item
browser.menus.create({
	id: 'action-search',
	title: browser.i18n.getMessage('actionSearchImage'),
	contexts: ['image']
});

// Add a listener for the context menu item
browser.menus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId !== 'action-search') {
		return;
	}
	
	// URL encode '?' and '&' in the original image's URL
	const sanitizedImageUrl = info.srcUrl.replace(/\?|&/g, match => match === '?' ? '%3F' : '%26');
	
	// Get the open in background option, defaulting to 'true' if it doesn't exist
	const getOpenInBackgroundPref = browser.storage.sync.get({ openInBackground: true });
	
	// Create the search tab
	getOpenInBackgroundPref.then(function(result) {
		browser.tabs.create({
			url: 'https://lens.google.com/uploadbyurl?url=' + sanitizedImageUrl,
			active: !result.openInBackground,
			openerTabId: tab.id
		});
	});
});
