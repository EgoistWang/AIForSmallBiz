const apiURL =
  "https://api.affiliateplus.xyz/api/chat?botname=AImpact&ownername=Admin&userid=1&message=";

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  appendBubble(text, "user");
  input.value = "";

  const res = await fetch(apiURL + encodeURIComponent(text));
  const data = await res.json();
  appendBubble(data.message, "bot");
}
