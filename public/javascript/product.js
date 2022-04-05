// update product
const productForm = document.querySelector("#update-product-form");

async function updateProduct(event) {
  event.preventDefault();
  const productId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log("helloooo", productId);

  const name = document.querySelector("#product-name").value.trim();
  const description = document
    .querySelector("#product-description")
    .value.trim();
  const price = document.querySelector("#product-price").value.trim();
  const unit = document.querySelector("#product-unit").value.trim();

  if (name && description && price && unit) {
    const response = await fetch(`/api/products/${productId}`, {
      method: "put",
      body: JSON.stringify({
        name,
        description,
        price,
        unit,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Please, fill out all fields");
  }
}

productForm.addEventListener("submit", updateProduct);
