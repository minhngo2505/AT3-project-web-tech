document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactform");
    const status = document.getElementById("status");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
      };
  
      status.textContent = "⏳ Sending...";
      status.className = "text-blue-400 font-medium text-center";
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) throw new Error("Network error");
  
        const result = await response.json();
        console.log("API Response:", result);
  
        status.textContent = "✅ Message sent successfully )";
        status.className = "text-green-400 font-medium text-center";
  
        form.reset();
      } catch (error) {
        console.error("Error:", error);
        status.textContent = "❌ Failed to send message )";
        status.className = "text-red-400 font-medium text-center";
      }
    });
  });
  