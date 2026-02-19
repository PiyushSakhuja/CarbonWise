async function loadGamification() {
  const data = await fetchGamification();
  console.log("Coins:", data.totalCoins);
  console.log("Badges:", data.badges);
}
