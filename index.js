
// <--START of index login script -->


// handling signupform

        function show(){
                document.getElementById("signUp").classList.remove("hidden");
            // document.getElementById("signUp").style.display = 'block' ;
           document.getElementById("login").classList.add("hidden");

        }

        function showlogin(){
          // document.getElementById("signUp").style.display = 'none' ; 
                document.getElementById("signUp").classList.add("hidden");

          document.getElementById("login").classList.remove("hidden");
        }

  // end of handling signupform
      

        // "formValidationScript"
      document.addEventListener("DOMContentLoaded", function () {
        // Email validation function
        function isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        }

        // Signup form validation
        const signupForm = document.getElementById("signupForm");
        const emailInput = document.getElementById("email");

        if (signupForm) {
          emailInput.addEventListener("input", function () {
            if (this.value.trim() === "") {
              this.classList.remove("input-valid", "input-invalid");
            } else if (isValidEmail(this.value)) {
              this.classList.add("input-valid");
              this.classList.remove("input-invalid");
            } else {
              this.classList.add("input-invalid");
              this.classList.remove("input-valid");
            }
          });

          signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("username");
            const experienceInput = document.getElementById("experience");

            let isValid = true;

            if (nameInput.value.trim() === "") {
              nameInput.classList.add("input-invalid");
              isValid = false;
            } else {
              nameInput.classList.remove("input-invalid");
            }

            if (!isValidEmail(emailInput.value)) {
              emailInput.classList.add("input-invalid");
              isValid = false;
            } else {
              emailInput.classList.remove("input-invalid");
            }

            if (experienceInput.value === "") {
              experienceInput.classList.add("input-invalid");
              isValid = false;
            } else {
              experienceInput.classList.remove("input-invalid");
            }

            if (isValid) {
              // Form is valid, would submit to server here
              alert("Form submitted successfully!");
              window.location.href = "dashboardfx.html"; 
              localStorage.setItem("fname", nameInput.value);
              signupForm.reset();

            }
          });
        }

        // Contact form validation
        const contactForm = document.getElementById("contactForm");
        const contactEmailInput = document.getElementById("contactEmail");

        if (contactForm) {
          contactEmailInput.addEventListener("input", function () {
            if (this.value.trim() === "") {
              this.classList.remove("input-valid", "input-invalid");
            } else if (isValidEmail(this.value)) {
              this.classList.add("input-valid");
              this.classList.remove("input-invalid");
            } else {
              this.classList.add("input-invalid");
              this.classList.remove("input-valid");
            }
          });

          contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("contactName");
            const subjectInput = document.getElementById("contactSubject");
            const messageInput = document.getElementById("contactMessage");

            let isValid = true;

            if (nameInput.value.trim() === "") {
              nameInput.classList.add("input-invalid");
              isValid = false;
            } else {
              nameInput.classList.remove("input-invalid");
            }

            if (!isValidEmail(contactEmailInput.value)) {
              contactEmailInput.classList.add("input-invalid");
              isValid = false;
            } else {
              contactEmailInput.classList.remove("input-invalid");
            }

            if (subjectInput.value.trim() === "") {
              subjectInput.classList.add("input-invalid");
              isValid = false;
            } else {
              subjectInput.classList.remove("input-invalid");
            }

            if (messageInput.value.trim() === "") {
              messageInput.classList.add("input-invalid");
              isValid = false;
            } else {
              messageInput.classList.remove("input-invalid");
            }

            if (isValid) {
              // Form is valid, would submit to server here
              alert("Message sent successfully!");
              contactForm.reset();
            }
          });
        }

        // Subscribe form validation
        const subscribeForm = document.getElementById("subscribeForm");

        if (subscribeForm) {
          const subscribeEmail = subscribeForm.querySelector('input[type="email"]');

          subscribeEmail.addEventListener("input", function () {
            if (this.value.trim() === "") {
              this.classList.remove("input-valid", "input-invalid");
            } else if (isValidEmail(this.value)) {
              this.classList.add("input-valid");
              this.classList.remove("input-invalid");
            } else {
              this.classList.add("input-invalid");
              this.classList.remove("input-valid");
            }
          });

          subscribeForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (!isValidEmail(subscribeEmail.value)) {
              subscribeEmail.classList.add("input-invalid");
            } else {
              // Form is valid, would submit to server here
              alert("Subscribed successfully!");
              subscribeForm.reset();
              
            }
          });
        }
      });
     
              // end of "formValidationScript"


            //   id="scrollEffectsScript"
      document.addEventListener("DOMContentLoaded", function () {
        // Sticky header
        const header = document.querySelector("header");
        let lastScrollTop = 0;

        window.addEventListener("scroll", function () {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > 50) {
            header.classList.add("shadow-md");
            header.classList.add("py-2");
            header.classList.remove("py-3");
          } else {
            header.classList.remove("shadow-md");
            header.classList.remove("py-2");
            header.classList.add("py-3");
          }

          lastScrollTop = scrollTop;
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              const headerHeight = header.offsetHeight;
              const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

              window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              });
            }
          });
        });
      });
    
   
            //  end of  id="scrollEffectsScript"


            //   id="mobileMenuScript"
      document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuBtn = document.getElementById("mobileMenuBtn");
        const mobileMenu = document.getElementById("mobileMenu");

        mobileMenuBtn.addEventListener("click", function () {
          mobileMenu.classList.toggle("hidden");

          if (mobileMenu.classList.contains("hidden")) {
            mobileMenuBtn.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
          } else {
            mobileMenuBtn.innerHTML = '<i class="ri-close-line ri-lg"></i>';
          }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach((link) => {
          link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
            mobileMenuBtn.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
          });
        });
      });
    
// end of  id="mobileMenuScript"

// <--START of index login script -->
