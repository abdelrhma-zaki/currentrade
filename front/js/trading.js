const coins = [...document.getElementsByClassName("coins")];
function vip() {
  fetch("api/account/update-balance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, amount: minus }),
    cache: "no-cache",
  }).then((res) => {
    if (res.ok) {
      alert(`opertation started and it will take 5min...`);
    } else {
      alert("something went wrong...");
    }
  });
  setTimeout(() => {
    const newPrice = Number(
      document.getElementsByClassName("buy-price form-control")[0].value
    );

    if (oldPrice == newPrice) {
      window.alert("Error !");
      const amount = quantity;
      fetch("api/account/update-balance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, amount }),
        cache: "no-cache",
      });
    } else if (oldPrice > newPrice) {
      window.alert("Error !");
    } else {
      window.alert("Error !");
      const amount = quantity + 0.9 * quantity;
      fetch("api/account/update-balance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, amount }),
        cache: "no-cache",
      });
    }
  }, 300000);
}
coins.forEach((e) => {
  e.onclick = () => {
    let price = Number(e.children[1].children[0].textContent);
    document.getElementsByClassName("buy-sell-price")[0].value = price;
    document.getElementsByClassName("buy-sell-price")[1].value = price;
    setInterval(() => {
      let price = Number(e.children[1].children[0].textContent);
      document.getElementsByClassName("buy-sell-price")[0].value = price;
      document.getElementsByClassName("buy-sell-price")[1].value = price;
    }, 2000);
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
      const balance = Number(data.balance);
      const email = data.email;
      if (quantity <= balance) {
        if (quantity < 1000) {
          fetch("api/account/update-balance", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, amount: minus }),
            cache: "no-cache",
          }).then((res) => {
            if (res.ok) {
              alert(`opertation started and it will take 5min...`);
            } else {
              alert("something went wrong...");
            }
          });
          setTimeout(() => {
            const newPrice = Number(
              document.getElementsByClassName("buy-price form-control")[0].value
            );

            if (oldPrice == newPrice) {
              window.alert("nothing changed...");
              const amount = quantity;
              fetch("api/account/update-balance", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, amount }),
                cache: "no-cache",
              });
            } else if (oldPrice > newPrice) {
              window.alert("you made a mistake...");
            } else {
              window.alert("you made money...");
              const amount = quantity + 0.9 * quantity;
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
            }
          }, 300000);
        } else {
          vip();
        }
      } else {
        alert("m4 tamam");
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
}, 10000);
