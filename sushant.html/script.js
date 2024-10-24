document.addEventListener("DOMContentLoaded", function() {
    // Language dropdown
    const languageBtn = document.getElementById("language-btn");
    const languageDropdown = document.getElementById("language-dropdown");
  
    languageBtn.addEventListener("click", () => {
      languageDropdown.classList.toggle("show-dropdown");
    });
  
    // FAQ toggle
    const faqItems = document.querySelectorAll(".faq ul li h2");
    
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        const plusIcon = item.querySelector("i");
        const content = item.nextElementSibling;
        
        content.classList.toggle("show-content");
        plusIcon.classList.toggle("fa-plus");
        plusIcon.classList.toggle("fa-minus");
      });
    });
  
    // Input validation for email form
    const emailInput = document.querySelectorAll(".email-form input")[0];
    const getStartedBtns = document.querySelectorAll(".btn-lg");
  
    getStartedBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
        } else {
          alert("Email validated! Redirecting...");
          // You can add a redirection or form submission logic here
        }
      });
    });
  });
  