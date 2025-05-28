// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Contact form validation (basic)
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // In production, you'd send data to server here
  alert("Thanks for reaching out! We'll be in touch.");
  form.reset(); // Clear form
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Sending...";

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
    button.disabled = false;
    button.textContent = "Send Message";
  }).catch(error => {
    alert("Network error");
    button.disabled = false;
    button.textContent = "Send Message";
  });
});

const emailInput = form.querySelector('input[name="email"]');

emailInput.addEventListener('input', () => {
  const isValid = emailInput.validity.valid;
  emailInput.style.borderColor = isValid ? "green" : "red";
});
