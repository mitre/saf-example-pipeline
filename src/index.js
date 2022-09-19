document.addEventListener('DOMContentLoaded', () => {
	const content = document.getElementById("content");
	content.textContent = "This text was swapped in programmatically."
	alert("content swapped"); // intentional vulnerability
}, false);
