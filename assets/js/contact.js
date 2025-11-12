/* eslint-env browser */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactform");
  const status1 = document.getElementById("status1"); // name error
  const status2 = document.getElementById("status2"); // email error
  const status3 = document.getElementById("status3"); // message error
  const status = document.getElementById("status4");   // main status
  ;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();


    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    status1.textContent = "";
    status2.textContent = "";
    status3.textContent = "";
    status.textContent = "";

    let valid = true;


    // flowcode of data validation
    //  Validate name
    if (!name) {
      status1.textContent = "⚠️ Name is required.";
      status1.className = "text-yellow-200 font-x-small text-left";
      valid = false;
    } else if (!namePattern.test(name)) {
      status1.textContent = "⚠️ Name can only contain letters and spaces.";
      status1.className = "text-yellow-200 font-x-small text-left";
      valid = false;
    }

    //  Validate email
    if (!email) {
      status2.textContent = "⚠️ Email is required.";
      status2.className = "text-yellow-200 font-x-small text-left";
      valid = false;
    } else if (!emailPattern.test(email)) {
      status2.textContent = "⚠️ Please enter a valid email address.";
      status2.className = "text-yellow-200 font-x-small text-left";
      valid = false;
    }

    // Validate message
    if (!message) {
      status3.textContent = "⚠️ Message is required.";
      status3.className = "text-yellow-200 font-x-small text-left";
      valid = false;
    } else if (message.length < 5) {
      status3.textContent = "⚠️ Message must be at least 5 characters long.";
      status3.className = "text-yellow-200 font-medium text-left";
      valid = false;
    }

    // ❌ Stop if any invalid
    if (!valid) return;

    // ✅ All valid — continue to send
    const formData = { name, email, message };
    status.textContent = "⏳ Sending...";
    status.className = "text-blue-200 font-medium text-center";

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network error");

      const result = await response.json();
      console.log("API Response:", result);

      status.textContent = "✅ Message sent successfully!";
      status.className = "text-green-200 font-medium text-center";
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      status.textContent = "❌ Failed to send message. Please try again later.";
      status.className = "text-red-200 font-medium text-center";
    }
  });
});
