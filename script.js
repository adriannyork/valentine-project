// Select the No button
const noButton = document.querySelector(".no");

// Track position offsets
let offsetX = 0; // horizontal movement (we'll limit to small right movement)
let offsetY = 0; // vertical movement

// Event when mouse enters No button
noButton.addEventListener("mouseenter", () => {
    // Random vertical movement: -30px to +30px
    const moveY = (Math.random() * 60) - 30; 
    offsetY = moveY;

    // Random right movement: 0px to +50px
    const moveX = Math.random() * 50; 
    offsetX = moveX;

    // Apply the movement
    noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// Select the Yes button
const yesButton = document.querySelector(".yes");

// Add click event to go to another page
yesButton.addEventListener("click", () => {
    window.location.href = "eat.html"; // Replace with your page
});




