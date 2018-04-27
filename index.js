const customProtocolDetection = require('custom-protocol-detection');

const finTags = Array.from(document.getElementsByClassName('fin'));
const finsTags = Array.from(document.getElementsByClassName('fins'));
const allTags = finTags.concat(finsTags);

for (let i = 0; i < allTags.length; i++) {
	allTags[i].onclick  = (event) => {
		const href = event.target.href;
		customProtocolDetection(href, () => {
			window.location = href.replace(/^.{3}/g, 'http');
		});
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
	}
}

