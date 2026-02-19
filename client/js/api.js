const API_BASE = "http://localhost:5000/api";

async function fetchAnalytics() {
  const res = await fetch(`${API_BASE}/analytics`);
  return res.json();
}

async function fetchSuggestions() {
  const res = await fetch(`${API_BASE}/suggestions`);
  return res.json();
}

async function fetchGamification() {
  const res = await fetch(`${API_BASE}/gamification`);
  return res.json();
}

async function logActivity(data) {
  const res = await fetch(`${API_BASE}/activity`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}
