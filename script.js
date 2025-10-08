const ota = document.getElementById("ota");
fetch("https://jsonplaceholder.typicode.com/users")
  .then(javob => javob.json())
  .then(data => chizish(data));

function chizish(malumot) {
  ota.innerHTML = "";
  malumot.map(odam => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
           <h2>ismi:  ${odam.name}</h2>
            <p>Username:  ${odam.username}</p>
            <p>Manzil: ${odam.address}</p>
            <p>Email: ${odam.email}</p>
      `
      ota.appendChild(div)
  })
}