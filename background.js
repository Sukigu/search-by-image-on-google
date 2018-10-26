'use strict';

browser.menus.create({
	id: 'action-search',
	title: browser.i18n.getMessage('actionSearchImage'),
	contexts: ['image']
});

browser.menus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId === 'action-search') {
		const getOpenInBackgroundPref = browser.storage.sync.get({
			openInBackground: true
		});

		getOpenInBackgroundPref.then(function(result) {
			browser.tabs.create({
				url: 'https://www.google.com/searchbyimage?image_url=' + info.srcUrl,
				active: !result.openInBackground,
				index: tab.index + 1
			});
		});
	}
});
