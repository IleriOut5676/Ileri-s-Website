const WHATSAPP_NUMBER = "27720388868";
const BUSINESS_EMAIL = "YOUR_EMAIL@example.com";

document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me"], a[href*="whatsapp"]'
    );

    whatsappLinks.forEach(function (link) {
        const message = "Hello Ileri's Outsourcing Solutions, I would like to request a quote.";
        link.href =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);
    });

    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(function (link) {
        link.href = "mailto:" + BUSINESS_EMAIL;
    });
});
