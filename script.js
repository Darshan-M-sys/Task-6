    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const dataDisplay = document.getElementById("data");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
      }

      dataDisplay.innerText = `✅ Thank you, ${name}! Your message has been received.`;
      form.reset();
      setTimeout(function(){
        form.style.display="none";

      },1000);
    });
