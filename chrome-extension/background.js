let extractedEmail = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.type === 'injectContentScript') {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const activeTab = tabs[0];

			if (activeTab) {
				chrome.scripting.executeScript(
					{
						target: { tabId: activeTab.id },
						files: ['content.js'],
					},

					() => {
						if (chrome.runtime.lastError) {
							console.log(
								'Error injecting content script:',
								chrome.runtime.lastError.message
							);
							sendResponse({
								success: false,
								error: chrome.runtime.lastError.message,
							});
						} else {
							console.log(
								'Content script injected successfully.'
							);
							sendResponse({ success: true });
						}
					}
				);
			} else {
				console.log('No active tab found.');
				sendResponse({ success: false, error: 'No active tab found.' });
			}
		});

		// Return true to indicate asynchronous response
		return true;
	}
});

// Listen for messages from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.type === 'emailExtracted') {
		extractedEmail = message.email; // Store the email
		console.log('Email received from content.js:', extractedEmail);
		sendResponse({ status: 'Email stored in background.js' });
	}
});

// Listen for requests from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.type === 'getEmail') {
		console.log('Email sent to popup.js:', extractedEmail);
		sendResponse({ email: extractedEmail });
	}
});
