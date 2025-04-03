// CTA Button Click Animation
// Ensure ctaButton is declared only once at the top
const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("click", () => {
  ctaButton.style.transform = "scale(0.95)";
  setTimeout(() => {
    ctaButton.style.transform = "scale(1)";
    alert("Welcome to InnovateStack! Ready to explore?");
  }, 100);
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(135deg, #1e1e2f, #3a3a5a)";
  } else {
    header.style.background = "#1e1e2f";
  }
});

// Fade-in Animation for Hero Text
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".hero-text").forEach((el) => observer.observe(el));
// CTA Button Click Animation (used on both index and login pages)
if (ctaButton) {
  ctaButton.addEventListener("click", (e) => {
    // On login page, let the form submit naturally; on index, show alert
    if (ctaButton.type !== "submit") {
      e.preventDefault();
      ctaButton.style.transform = "scale(0.95)";
      setTimeout(() => {
        ctaButton.style.transform = "scale(1)";
        alert("Welcome to InnovateStack! Ready to explore?");
      }, 100);
    }
  });
}

// Navbar Background Change on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(135deg, #1e1e2f, #3a3a5a)";
  } else {
    header.style.background = "#1e1e2f";
  }
});

if (ctaButton) {
  ctaButton.addEventListener("click", (e) => {
    if (ctaButton.type !== "submit") {
      e.preventDefault();
      ctaButton.style.transform = "scale(0.95)";
      setTimeout(() => {
        ctaButton.style.transform = "scale(1)";
        alert("Welcome to InnovateStack! Ready to explore?");
      }, 100);
    }
  });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(135deg, #1e1e2f, #3a3a5a)";
  } else {
    header.style.background = "#1e1e2f";
  }
});

// Add form validation for contact page
const contactForm = document.querySelector(".contact-section form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const email = contactForm.querySelector("input[type='email']").value;
    if (!email.includes("@")) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}
