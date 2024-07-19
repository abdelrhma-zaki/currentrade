const coins = [...document.getElementsByClassName("coins")];
coins.forEach((e) => {
  e.onclick = () => {
    let price = Number(e.children[1].children[0].textContent);
    document.getElementsByClassName("buy-sell-price")[0].value = price;
    document.getElementsByClassName("buy-sell-price")[1].value = price;
  };
});
function getCookies() {
  let cookies = document.cookie.split(";").reduce((acc, cookie) => {
    let [key, value] = cookie.split("=").map((c) => c.trim());
    acc[key] = value;
    return acc;
  }, {});
  return cookies;
}
// buy-sell-price
document.getElementsByClassName("buy-btn")[0].onclick = async () => {
  const quantity = Number(
    document.getElementsByClassName("buy-qty-input form-control")[0].value
  );
  const minus = quantity * -1;
  console.log("minus :", minus);
  fetch("/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(getCookies()),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const oldPrice = Number(
        document.getElementsByClassName("buy-price form-control")[0].value
      );
      const balance = data.balance;
      const email = data.email;
      if (quantity <= balance) {
        fetch("api/account/update-balance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, minus }),
          cache: "no-cache",
        }).then((res) => {
          if (res.ok) {

            alert(`${minus}$ add to ${email}`);
          } else {
            alert("something went wrong");
          }
        });
        setTimeout(() => {
          const newPrice = Number(
            document.getElementsByClassName("buy-price form-control")[0].value
          );

          if (oldPrice == newPrice) {
            window.alert("nothing changed...");
          } else if (oldPrice > newPrice) {
            window.alert("you made a mistake...");
          } else {
            window.alert("you made money...");
            const earnedMoney = quantity + 0.9 * quantity;
            fetch("api/account/update-balance", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, earnedMoney }),
              cache: "no-cache",
            }).then((res) => {
              if (res.ok) {
                alert(`${earnedMoney}$ add to ${email}`);
              } else {
                alert("something went wrong");
              }
            });
          }
        }, 300000);
      } else {
        console.log("m4 tamam");
      }
    });
};

const coinsType = [];
for (let i = 0; i < coins.length; i++) {
  coinsType.push(coins[i].children[0].textContent.trim());
}
const rand = (number) => {
  let order = 1;
  while ((number / order).toFixed() > 0) {
    order *= 10;
  }
  let newNumber = 0;
  do {
    newNumber = Math.random() * order;
  } while (Math.floor(number) != Math.floor(newNumber));
  return newNumber.toFixed(2);
};

setInterval(() => {
  for (let i = 0; i < coins.length; i++) {
    coins[i].children[1].children[0].textContent = rand(
      Number(coins[i].children[1].children[0].textContent)
    );
  }
}, 30000);
