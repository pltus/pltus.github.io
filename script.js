const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const applyButton = document.getElementById("applyColorBtn");
const square = document.getElementById("square");
const info = document.getElementById("info");

function clampChannel(value) {
	const num = Number(value);
	if (!Number.isFinite(num) || Number.isNaN(num)) {
		return null;
	}
	return Math.min(255, Math.max(0, Math.round(num)));
}

function buildRgbString(r, g, b) {
	return `rgb(${r}, ${g}, ${b})`;
}

function updateBackground({ r, g, b }) {
	const color = buildRgbString(r, g, b);
	document.body.style.backgroundColor = color;
	document.body.style.backgroundImage = "none";
	square.style.backgroundColor = color;
	if (info) {
		info.textContent = `현재 색상: (${r}, ${g}, ${b})`;
	}
}

function applyColorFromInputs() {
	const r = clampChannel(redInput.value);
	const g = clampChannel(greenInput.value);
	const b = clampChannel(blueInput.value);

	if (r === null || g === null || b === null) {
		if (info) info.textContent = "RGB 값은 숫자여야 합니다.";
		return;
	}

	redInput.value = r;
	greenInput.value = g;
	blueInput.value = b;
	updateBackground({ r, g, b });
}

if (applyButton) {
	applyButton.addEventListener("click", applyColorFromInputs);
}

document.addEventListener("keydown", (event) => {
	if (!applyButton) return;
	if (event.key === "Enter") {
		applyColorFromInputs();
	}
});

applyColorFromInputs();
