document.addEventListener('DOMContentLoaded', () => {
	const content = document.getElementById("content");
	content.textContent = "This text was swapped in programmatically."

	// intentional vulnerability section - unsanitized hash section from the url is being put into the dom
	const vuln = document.getElementById("vuln");
	vuln.innerHTML = decodeURIComponent(location.hash.substr(1));
}, false);
