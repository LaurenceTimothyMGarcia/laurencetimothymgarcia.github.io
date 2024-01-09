// Checks aspect ratio

function ScreenRatio() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Calculate the screen ratio
  const screenRatio = screenWidth / screenHeight;

  // Check if the screen ratio is 1.25 or less
  return screenRatio < 1.3;
}

export default ScreenRatio();