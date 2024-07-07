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
      quantity <= balance
        ? setTimeout(() => {
            const newPrice = Number(
              document.getElementsByClassName("buy-price form-control")[0].value
            );

            oldPrice == newPrice
              ? window.alert("nothing changed...")
              : oldPrice > newPrice
              ? window.alert("you made a mistake...")
              : window.alert("you made money...");
          }, 300000)
        : console.log("m4 tamam");
    });
};

const coinsType = [];
for (let i = 0; i < coins.length; i++) {
  coinsType.push(coins[i].children[0].textContent.trim());
}
// fetch(
//   "https://marketdata.tradermade.com/api/v1/live?currency=EURUSD,AUDUSD,GBPUSD,USDJPY,UK100,USDCAD,USDINR,EURZAR,AEDEUR,EURPHP,EURPLN,EURRON,EURRUB,EURSEK,EURSGD,EURTHB,EURTRY,EURTWD,EURXAG,EURXAU,GBPAED,GBPAUD,GBPBRL,GBPCAD,GBPCHF,USDZAR,GBPCZK,GBPDKK,GBPEUR,GBPHKD,GBPHUF,GBPINR,GBPJPY,GBPKRW,GBPMXN,GBPMYR,GBPNOK,GBPNZD,BTCUSDT&api_key=a2sgXj4rk_CQh3-nosNU"
// )
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     let current;
//     let index;
//     for (let i = 0; i < data.quotes.length; i++) {
//       current = `${data.quotes[i].base_currency}/${data.quotes[i].quote_currency}`;
//       index = coinsType.indexOf(current) || -1;
//       if (index == -1) continue;
//       coins[index].children[1].children[0].textContent = data.quotes[i].ask;
//     }
//   });

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
}, 300000);
