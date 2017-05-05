chrome.contextMenus.create({
	id: "googleimagesearch-action",
	title: "Search Image on Google",
	contexts: ["image"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId === "googleimagesearch-action") {
		browser.tabs.create({
			"url": "https://www.google.com/searchbyimage?image_url=" + info.srcUrl,
			"active": false,
			"index": tab.index + 1
		});
	}
});
