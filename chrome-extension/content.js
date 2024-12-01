async function extractEmailFromLinkedIn() {
	// Trigger the Contact Info overlay
	const contactInfoButton = document.querySelector(
		'a#top-card-text-details-contact-info'
	);

	if (!contactInfoButton) {
		console.log('Contact Info button not found.');
		return null;
	}

	// Click the Contact Info button
	contactInfoButton.click();

	// Wait for the overlay to load
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// Look for email in the overlay
	const overlay = document.querySelector('.artdeco-modal__content');

	if (!overlay) {
		console.log('Contact Info overlay not found.');
		return null;
	}

	// Search for mailto: links
	const mailtoLink = overlay.querySelector('a[href^="mailto:"]');
	if (mailtoLink) {
		return mailtoLink.href.replace('mailto:', '').trim();
	}

	// No email found
	console.log('No email found in Contact Info overlay.');
	return null;
}

// Attempt to extract email and send it to the background script
extractEmailFromLinkedIn().then((email) => {
	chrome.runtime.sendMessage({ type: 'emailExtracted', email });
});
