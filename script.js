const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim() || "Website visitor";
    const email = document.getElementById("contact-email")?.value.trim() || "";
    const message = document.getElementById("contact-message")?.value.trim() || "";

    const subject = encodeURIComponent(`Website contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:emoryyqt@gmail.com?subject=${subject}&body=${body}`;
  });
}
