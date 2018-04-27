const customProtocolDetection = require('custom-protocol-detection');

function enableFinTags() {
	const allTags = Array.from(document.querySelectorAll('a[data-manifest]'));

	for (let i = 0; i < allTags.length; i++) {
		allTags[i].onclick  = (event) => {
			event.preventDefault ? event.preventDefault() : event.returnValue = false;
			const manifestUrl = event.target.dataset.manifest;
			customProtocolDetection(manifestUrl, () => {
				window.location.href = event.target.href;
			}, () => {
				console.log('RVM Available - Application Launched!');
			});
		}
	}
}

module.exports = enableFinTags;
