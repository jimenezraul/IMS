//  new supplier form

const supplier_form = document.querySelector(".new-supplier-form");

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
        name: name,
        email: email,
        phone: number,
        address: address,
        city: city,
        state: state,
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
