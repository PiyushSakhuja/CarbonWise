document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  // TEMPORARY: simulate login success
  if (email && password) {
    // store fake session
    localStorage.setItem("carbonUser", email);

    // redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter valid credentials.");
  }
});
