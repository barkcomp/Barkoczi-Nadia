let ok = 1;
function togglePDF()
{
	if (ok === 1) {
		document.getElementById("button").innerText = "Hide Preview";
		ok = 0;
	}
	else {
		document.getElementById("button").innerText = "Preview PDF";
		ok = 1;
	}
		
			let box = document.getElementById("pdfBox");
	box.style.display = (box.style.display === "none") ? "block" : "none";
}
function openLightbox(src) {
	document.getElementById("lightbox").style.display = "flex";
	document.getElementById("lightbox-img").src = src;
}