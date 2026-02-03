// Wait until HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const choice = document.getElementById("choice");
    if (!choice) return; // stop if not on eat.html

    // Select all buttons
    const buttons = document.querySelectorAll(".restaurant");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            choice.textContent = `Yay! We will eat at ${name}! 😋`;
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const choice = document.getElementById("choice");
    if (!choice) return; // stop if not on eat.html

    const buttons = document.querySelectorAll(".restaurant");
    const notification = document.getElementById("notification");
    const goMessage = document.getElementById("goMessage");

    // 1️⃣ Restaurant button click
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const restaurantName = button.getAttribute("data-name");
            choice.textContent = `Yay! We will eat at ${restaurantName}! 😋`;

            // 2️⃣ Show the notification
            notification.classList.add("show");
        });
    });

    // 3️⃣ Notification button click → redirect to message.html
    goMessage.addEventListener("click", () => {
        window.location.href = "message.html";
    });
});



