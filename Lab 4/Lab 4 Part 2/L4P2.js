const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");

const overlay = document.querySelector(".overlay");

const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const altTexts = {
	"pic1.jpg": "Closeup of human eye",
	"pic2.jpg": "Rock that looks like a wave", 
	"pic3.jpg": "Purple and white pansies",
	"pic4.jpg": "Section of a wall from a pharaoh's tomb",
	"pic5.jpg": "Large moth on a leaf"
};

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";


for (let i = 1; i <= imageFiles.length; i++) {
	const newImage = document.createElement("img");
	const fileName = imageFiles[i - 1];

	newImage.setAttribute("src", baseURL + fileName);
	newImage.setAttribute("alt", altTexts[fileName]);

	thumbBar.appendChild(newImage);
	
	newImage.addEventListener("click", function () {
		displayedImage.setAttribute("src", baseURL + fileName);
		displayedImage.setAttribute("alt", altTexts[fileName]);
});
}
overlay.style.position = "absolute"
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.pointerEvents = "none";
btn.addEventListener("click", function () {
	const btnClass = btn.getAttribute("class");
	
	if (btnClass === "dark") {
		btn.setAttribute("class", "light");
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
	} else {
		btn.setAttribute("class", "dark");
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
	}
});