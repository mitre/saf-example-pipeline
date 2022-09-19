document.addEventListener('DOMContentLoaded', () => {
	const content = document.getElementById("content");
	eval(content.textContent); // intentional vulnerability
	content.textContent = "This text was swapped in programmatically."
}, false);
