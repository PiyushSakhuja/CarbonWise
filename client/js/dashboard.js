
if (!localStorage.getItem("carbonUser")) {
  window.location.href = "login.html";
}
document.addEventListener("DOMContentLoaded", async () => {
  const analytics = await fetchAnalytics();
  const gamification = await fetchGamification();
  const suggestions = await fetchSuggestions();

  document.getElementById("totalEmission").innerText =
    analytics.totalEmission + " kg";

  document.getElementById("ecoScore").innerText =
    analytics.averageEmission;

  document.getElementById("totalCoins").innerText =
    gamification.totalCoins;

  document.getElementById("suggestions").innerText =
    suggestions.suggestions;
});

function logout() {
  localStorage.removeItem("carbonUser");
  window.location.href = "login.html";
}
