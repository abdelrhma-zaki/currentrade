// Function to get all cookies as an object
function getCookies() {
  let cookies = document.cookie.split(";").reduce((acc, cookie) => {
    let [key, value] = cookie.split("=").map((c) => c.trim());
    acc[key] = value;
    return acc;
  }, {});
  return cookies;
}
// Fetch request with cookies
fetch("/api/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify(getCookies()),
})
  .then((response) => {
    if (!response.ok) {
      window.location.href = "/login";
    }
    return response.json();
  })
  .then((data) => {
    document.getElementById("balance").textContent = `Balance: $ ${Number(
      data.balance
    )}`;
  });
