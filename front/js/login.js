const login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`./api/account/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((error) => {
          throw new Error(error.message);
        });
      }
      return res.json();
    })
    .then((data) => {
      window.location.href = "/withdrawl";
    })
    .catch((error) => {
      alert(error.message);
    });
};

const register = async () => {
  const password = document.getElementById("password").value;
  const cPassword = document.getElementById("confirm-password").value;
  const email = document.getElementById("email").value;
  if (password != cPassword) {
    alert("the password in the 2 fields is not the same...");
  } else {
    fetch("/api/account/register", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
      cache: "no-cache",
    })
      .then((res) => {
        if (res.ok) {
          window.location.href = "/withdrawl";
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }
};
