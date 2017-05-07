'use strict';

function saveOptions(e) {
	browser.storage.sync.set({
		openInBackground: document.getElementById('openInBackground').checked
	});
}

function restoreOptions() {
	function setCurrentChoice(result) {
		document.getElementById('openInBackground').checked = result.openInBackground;
	}

	document.getElementById('openInBackgroundLabel').textContent = browser.i18n.getMessage('openInBackground');

	var getPreference = browser.storage.sync.get({
		openInBackground: true
	});
	getPreference.then(setCurrentChoice);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('openInBackground').addEventListener('click', saveOptions);
