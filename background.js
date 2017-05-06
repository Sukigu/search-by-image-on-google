browser.contextMenus.create({
	id: "googleimagesearch-action",
	title: "Search Image on Google",
	contexts: ["image"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId === "googleimagesearch-action") {
		var getPreference = browser.storage.sync.get({
			openinbackground: true
		});

		getPreference.then(function(result) {
			browser.tabs.create({
				"url": "https://www.google.com/searchbyimage?image_url=" + info.srcUrl,
				"active": !result.openinbackground,
				"index": tab.index + 1
			});
		});
	}
});
