'use strict';

function init() {
	// Get localized text
	document.getElementById('lbl-open-background').textContent = browser.i18n.getMessage('lblOpenInBackground');
	
	// Get the open in background option, defaulting to 'true' if it doesn't exist
	const getOpenInBackgroundPref = browser.storage.sync.get({ openInBackground: true });
	
	// Set the preference's initial state
	getOpenInBackgroundPref.then(function(result) {
		document.getElementById('input-open-background').checked = result.openInBackground;
	});
}

function saveOptions() {
	const isOpenInBackgroundPrefChecked = document.getElementById('input-open-background').checked;
	browser.storage.sync.set({ openInBackground: isOpenInBackgroundPrefChecked });
}

document.addEventListener('DOMContentLoaded', init);
document.getElementById('input-open-background').addEventListener('change', saveOptions);

const SUPPORTED_LANGUAGES = ['en', 'pt', 'es', 'ru', 'uk'];
const browserLang = browser.i18n.getUILanguage().substring(0, 2);

// Show message inviting the user to contribute with translations,
// but only if their browser language is not supported by the extension
if (!SUPPORTED_LANGUAGES.includes(browserLang)) {
	document.getElementById('msg-translate').removeAttribute('style');
}
