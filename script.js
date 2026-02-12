
  const imageElement = document.getElementById('myImage');

  // Function to change the image source
  function changeImageSource() {
    imageElement.src = 'images/Untitled_design__1_-removebg-preview.png';
    imageElement.alt = 'shark2';
    // Optional: remove the animation class after completion to prepare for a new animation if needed
    imageElement.classList.remove('horizontal-move');
    imageElement.style.width = '700px';
    imageElement.style.height = '1100px';
      }

  // Listen for the 'animationend' event
  imageElement.addEventListener('animationend', changeImageSource);

  // Trigger the animation (you might do this on page load, button click, etc.)
  // For demonstration, let's add the class after a short delay
  //setTimeout(() => {
   // imageElement.classList.add('animate-image');
  //}, 100); 

  function changeScreen() {
    document.getElementById('screen1').style.display = 'none';
    document.getElementById('screen2').style.display = 'block';
  }