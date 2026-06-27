function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function checkRisk() {
  const score = document.getElementById("riskScore").value;
  const result = document.getElementById("riskResult");

  if (score === "") {
    result.textContent = "Please enter a risk score.";
    result.style.color = "red";
  } else if (score < 0 || score > 100) {
    result.textContent = "Please enter a score between 0 and 100.";
    result.style.color = "red";
  } else if (score < 40) {
    result.textContent = "Low Risk";
    result.style.color = "green";
  } else if (score <= 70) {
    result.textContent = "Medium Risk";
    result.style.color = "orange";
  } else {
    result.textContent = "High Risk";
    result.style.color = "red";
  }
}

function toggleFAQ(index) {
  const answers = document.querySelectorAll(".faq-answer");
  const answer = answers[index];

  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const result = document.getElementById("formResult");

  if (name === "" || email === "" || message === "") {
    result.textContent = "Please fill in all fields.";
    result.style.color = "red";
  } else {
    result.textContent = "Thank you, " + name + ". Your message has been submitted.";
    result.style.color = "green";
  }
}