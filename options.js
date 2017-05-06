function saveOptions(e) {
	browser.storage.sync.set({
		openinbackground: document.getElementById('openinbackground').checked
	});
}

function restoreOptions() {
	function setCurrentChoice(result) {
		document.getElementById('openinbackground').checked = result.openinbackground;
	}

	var getPreference = browser.storage.sync.get({
		openinbackground: true
	});
	getPreference.then(setCurrentChoice);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('openinbackground').addEventListener('click', saveOptions);
