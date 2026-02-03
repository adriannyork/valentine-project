document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("backButton");
    if (backButton) { // check if it exists
        backButton.addEventListener("click", () => {
            window.location.href = "index.html"; // go back to start page
        });
    }
});
