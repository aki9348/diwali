document.getElementById("Ent").addEventListener("click", function () {
  // Get values from input fields
  const name = document.getElementById("Naam").value;
  const greeting = document.getElementById("Greet").value;

  // Check if the user has selected a greeting
  if (greeting === "default") {
    alert("Please select a greeting.");
    return;
  }

  // Merge values into a single string
  const message = `${greeting} ${name},`;

  // Store the message in local storage
  localStorage.setItem("userMessage", message);

  // Redirect to wish.html
  window.location.href = "wish.html";
});
