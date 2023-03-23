let colorIndex = 0;
let greyscale = 0;
const colors = ["red", "green", "blue", "white"];

const colorText = document.getElementById("color-text");
const greyscaleText = document.getElementById("greyscale-text");

function updateBackgroundColor() {
  if (colorIndex === colors.length) {
    document.body.style.backgroundColor = `rgb(${greyscale}, ${greyscale}, ${greyscale})`;
    colorText.textContent = "Color: Greyscale";
  } else {
    document.body.style.backgroundColor = colors[colorIndex];
    colorText.textContent = `Color: ${colors[colorIndex].charAt(0).toUpperCase() + colors[colorIndex].slice(1)}`;
  }
  greyscaleText.textContent = `Greyscale: ${greyscale}`;
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
    } else {
    return; // Do nothing for other keys
    }
    updateBackgroundColor();
    });
