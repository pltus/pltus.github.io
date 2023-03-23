let colorIndex = 0;
let greyscale = 0;
const colors = ["red", "green", "blue", "white"];

const info = document.getElementById("info");
const colorText = document.getElementById("color-text");
const greyscaleText = document.getElementById("greyscale-text");

function invertColor(rgb) {
    return rgb(${ 255 - rgb[0] }, ${ 255 - rgb[1] }, ${ 255 - rgb[2] });
}
function updateBackgroundColor() {
    let bgColor, textColor;
    if (colorIndex === colors.length) {
        bgColor = rgb(${ greyscale }, ${ greyscale }, ${ greyscale });
        textColor = invertColor([greyscale, greyscale, greyscale]);
        colorText.textContent = "Color: Greyscale";
    } else {
        bgColor = colors[colorIndex];
        textColor = invertColor(window.getComputedStyle(document.body).backgroundColor.match(/\d+/g).map(Number));
        colorText.textContent = Color: ${ colors[colorIndex].charAt(0).toUpperCase() + colors[colorIndex].slice(1) };
    }
    greyscaleText.textContent = Greyscale: ${ greyscale };
    document.body.style.backgroundColor = bgColor;
    colorText.style.color = textColor;
    greyscaleText.style.color = textColor;
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "ArrowLeft") {
        colorIndex = (colorIndex + colors.length - 1) % colors.length;
    } else if (key === "ArrowRight") {
        colorIndex = (colorIndex + 1) % colors.length;
    } else if (key === "ArrowUp") {
        greyscale = Math.min(255, greyscale + 1);
        colorIndex = colors.length; // Set to greyscale mode
    } else if (key === "ArrowDown") {
        greyscale = Math.max(0, greyscale - 1);
        colorIndex = colors.length; // Set to greyscale mode
    } else if (key === " ") {
        // Toggle visibility of text
        info.style.display = info.style.display === "none" ? "block" : "none";
    } else {
        return; // Do nothing for other keys
    }
    updateBackgroundColor();
});