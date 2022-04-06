const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
// Capetilize first letter of each word
const capitalizeEach = (string) => {
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = capitalize(string[i]);
  }
  return string.join(" ");
};

// capetalize all words in a string
const capitalizeAll = (string) => {
  return string
    .split("")
    .map((word) => capitalize(word))
    .join("");
};

const supplier_form = document.querySelector(".new-supplier-form");

//  new supplier form

const handleSupplierForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#new-supplier-name").value.trim();
  const email = document.querySelector("#new-supplier-email").value.trim();
  const number = document.querySelector("#new-supplier-number").value.trim();
  const address = document.querySelector("#new-supplier-address").value.trim();
  const city = document.querySelector("#new-supplier-city").value.trim();
  const state = document.querySelector("#new-supplier-state").value.trim();
  const zip = document.querySelector("#new-supplier-zip").value.trim();

  if (name && email && number && address && city && state && zip) {
    const response = await fetch("/api/suppliers", {
      method: "POST",
      body: JSON.stringify({
        name: capitalizeEach(name),
        email: email,
        phone: number,
        address: capitalizeEach(address),
        city: capitalizeEach(city),
        state: capitalizeAll(state),
        zip: zip,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create supplier.");
    }
  } else {
    alert("Please fill out all fields.");
  }
};

supplier_form.addEventListener("submit", handleSupplierForm);
