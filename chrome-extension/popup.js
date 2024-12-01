document
	.getElementById('extract-email-button')
	.addEventListener('click', function () {
		const loadingSpinner = document.getElementById('loading-spinner');
		const emailAddress = document.getElementById('email-address');
		const extractButton = document.getElementById('extract-email-button');

		extractButton.disabled = true;
		loadingSpinner.style.display = 'block';
		emailAddress.style.display = 'none';

		// Request background.js to inject content.js
		chrome.runtime.sendMessage(
			{ type: 'injectContentScript' },
			(response) => {
				if (response && response.success) {
					// Request email from background.js after content script runs
					chrome.runtime.sendMessage(
						{ type: 'getEmail' },
						(emailResponse) => {
							if (emailResponse && emailResponse.email) {
								showEmailInUI(emailResponse.email);
								saveEmail(emailResponse.email).then((res) =>
									res.json()
								);
							} else showEmailInUI(null);

							loadingSpinner.style.display = 'none';
							emailAddress.style.display = 'block';
							extractButton.disabled = false;
						}
					);
				} else {
					console.log(
						'Failed to inject content script:',
						response.error
					);
				}
			}
		);
	});

/**
 * Show Email in UI
 *
 * @param {*} email
 * @returns
 */
const showEmailInUI = (email) =>
	(document.getElementById('email-address').textContent =
		email || 'No email found.');

/**
 * Send Email to Backend
 *
 * @param {*} email
 */
const saveEmail = async (email) => {
	fetch(`${process.env.SERVICE_DOMAIN}/${process.env.SERVICE_DOMAIN}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
		}),
	});
};
