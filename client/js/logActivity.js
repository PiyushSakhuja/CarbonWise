document.getElementById("activityForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    travel: { carKm: 10 },
    electricity: { units: 5 },
    food: { vegMeals: 2 },
    lifestyle: { plasticUsage: 1 }
  };

  await logActivity(data);
  alert("Activity logged!");
});
