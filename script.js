// =====================================================
// ILERI'S OUTSOURCING SOLUTIONS
// Website JavaScript
// =====================================================


// ================= CURRENT YEAR =================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================= WHATSAPP =================

// Replace this number later with Ileri's WhatsApp number.
// IMPORTANT:
// Use the international format WITHOUT the + sign or spaces.
//
// Example:
// South African number: 082 123 4567
// Becomes:
// 27821234567

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";


// ================= WHATSAPP BUTTONS =================

const whatsappLinks = document.querySelectorAll(
    'a[href*="YOUR_WHATSAPP_NUMBER"]'
);

whatsappLinks.forEach(function (link) {

    const message =
        "Hello Ileri's Outsourcing Solutions, I would like to request a quote for your services.";

    const encodedMessage = encodeURIComponent(message);

    link.href =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodedMessage;

});


// ================= EMAIL =================

// Replace this later with the official Ileri's email address.

const BUSINESS_EMAIL = "YOUR_EMAIL@example.com";


// ================= SMOOTH NAVIGATION =================

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ================= BOOKING MESSAGE =================

// This prepares a simple email booking option
// while we set up the Google Form.

const quoteButtons = document.querySelectorAll(
    'a[href="#booking"]'
);

quoteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log(
            "Customer is viewing the Ileri's quote section."
        );

    });

});


// ================= PAGE LOAD MESSAGE =================

console.log(
    "Ileri's Outsourcing Solutions website loaded successfully."
);
