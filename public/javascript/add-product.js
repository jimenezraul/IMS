const product_form = document.querySelector(".new-product-form");

const handleProductForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#new-product-name").value.trim();
  const description = document
    .querySelector("#new-product-description")
    .value.trim();
  const price = document.querySelector("#new-product-price").value.trim();
  const units = document.querySelector("#new-product-units").value.trim();
  const category_id = document
    .querySelector("#new-product-category")
    .value.trim();
  const supplier_id = document
    .querySelector("#new-product-supplier")
    .value.trim();
  const user_id = product_form.getAttribute("user_data");

  if (
    name &&
    description &&
    price &&
    units &&
    !isNaN(category_id) &&
    !isNaN(supplier_id) &&
    user_id
  ) {
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        units: units,
        category_id: category_id,
        supplier_id: supplier_id,
        user_id: user_id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create product.");
    }
  } else {
    alert("Please fill out all fields.");
  }
};

product_form.addEventListener("submit", handleProductForm);
