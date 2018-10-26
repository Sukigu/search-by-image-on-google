'use strict';

function saveOptions() {
	browser.storage.sync.set({
		openInBackground: document.getElementById('input-open-background').checked
	});
}

function restoreOptions() {
	const setCurrentChoice = function(result) {
		document.getElementById('input-open-background').checked = result.openInBackground;
	};

	document.getElementById('lbl-open-background').textContent = browser.i18n.getMessage('lblOpenInBackground');

	const getOpenInBackgroundPref = browser.storage.sync.get({
		openInBackground: true
	});
	
	getOpenInBackgroundPref.then(setCurrentChoice);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('input-open-background').addEventListener('change', saveOptions);
