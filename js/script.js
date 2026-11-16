// Dark mode: JavaScript toggles a class; CSS defines the colours.
const themeButton = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const isDarkMode = document.body.classList.contains("dark");

    themeButton.setAttribute("aria-pressed", isDarkMode);
    themeLabel.textContent = isDarkMode
        ? "Switch to light mode"
        : "Switch to dark mode";
});

// A small interaction for the contact form (this demo does not send an email).
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();
    formMessage.textContent = `Thanks, ${visitorName}! Your details were entered successfully.`;
    contactForm.reset();
});
