// MOBILE MENU TOGGLE
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.innerHTML = isOpen ? "✕" : "☰";
});

// FORM VALIDATION
const form = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form refresh

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        messageDiv.textContent = "Please fill out all required fields.";
        messageDiv.style.color = "red";
        return;
    }

    messageDiv.textContent = "Thank you! Your message has been sent ✔";
    messageDiv.style.color = "green";

    form.reset();
});
