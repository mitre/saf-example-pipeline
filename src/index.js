document.addEventListener('DOMContentLoaded', () => {
	const content = document.getElementById("content");
	content.textContent = "This text was swapped in programmatically."
}, false);

// intentional vulnerability section - origins should be verified during cross-origin communications
window.addEventListener("message", function(event) {
	console.log(event.data);
});
