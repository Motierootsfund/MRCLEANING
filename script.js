const phoneNumber = "27765695363";
const businessEmail = "Mrcleaningsolutions@outlook.com";
const form = document.getElementById("booking-form");
const statusBox = document.getElementById("form-status");
document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

function bookingMessage() {
  if (!form.reportValidity()) return null;
  const data = new FormData(form);
  const labels = {
    name: "Name", phone: "Phone / WhatsApp", service: "Service",
    property: "Property type", location: "Location", date: "Preferred date",
    size: "Bedrooms / windows", message: "Additional information"
  };
  const lines = ["NEW BOOKING REQUEST — MR CLEANING SOLUTIONS", ""];
  for (const [key, label] of Object.entries(labels)) {
    const value = (data.get(key) || "").toString().trim();
    if (value) lines.push(`${label}: ${value}`);
  }
  lines.push("", "Please contact me to confirm availability and pricing.");
  return lines.join("\n");
}
form.addEventListener("submit", event => {
  event.preventDefault();
  const message = bookingMessage();
  if (!message) return;
  statusBox.textContent = "Opening WhatsApp with your booking details. Please press Send in WhatsApp to submit your request.";
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
document.getElementById("email-booking").addEventListener("click", () => {
  const message = bookingMessage();
  if (!message) return;
  const subject = encodeURIComponent("Website booking request – MR Cleaning Solutions");
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${encodeURIComponent(message)}`;
  statusBox.textContent = "Your email app should open with the booking details ready. Please send the email to submit your request.";
});