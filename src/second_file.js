// intentional vulnerability section - origins should be verified during cross-origin communications
window.addEventListener("message", function(event) {
	console.log("Testing sonarqube branch support");
});
