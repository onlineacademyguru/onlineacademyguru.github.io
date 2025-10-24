document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.getElementById("formMessage");
  msg.textContent = "✅ Message sent successfully!";
  msg.style.color = "green";
  this.reset();
});

