'use strict';

browser.contextMenus.create({
	id: 'googleimagesearch-action',
	title: browser.i18n.getMessage('searchImage'),
	contexts: ['image']
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId === 'googleimagesearch-action') {
		var getPreference = browser.storage.sync.get({
			openInBackground: true
		});

		getPreference.then(function(result) {
			browser.tabs.create({
				url: 'https://www.google.com/searchbyimage?image_url=' + info.srcUrl,
				active: !result.openInBackground,
				index: tab.index + 1
			});
		});
	}
});
