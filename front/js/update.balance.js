const addAmount = () => {
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;
  document.getElementById("email").value = "";
  document.getElementById("amount").value = "";
  fetch("api/account/update-balance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, amount }),
    cache: "no-cache",
  }).then((res) => {
    if (res.ok) {
      alert(`${amount}$ add to ${email}`);
    } else {
      alert("something went wrong");
    }
  });
};
