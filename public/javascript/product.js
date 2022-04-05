const productForm = document.querySelector("#update-product-form");
const supplierForm = document.querySelector("#update-supplier-form");

// update product
async function updateProduct(event) {
  event.preventDefault();
  const productId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

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

// handle supplier form
async function updateSupplier(event) {
  event.preventDefault();

  const supplierId = supplierForm.getAttribute("supplier_id");

  const name = document.querySelector("#supplier-name").value.trim();
  const phone = document.querySelector("#supplier-phone").value.trim();
  const email = document.querySelector("#supplier-email").value.trim();
  const address = document.querySelector("#supplier-address").value.trim();
  const city = document.querySelector("#supplier-city").value.trim();
  const state = document.querySelector("#supplier-state").value.trim();
  const zip = document.querySelector("#supplier-zip").value.trim();

  if (name && phone && email && address && city && state && zip) {
    const response = await fetch(`/api/suppliers/${supplierId}`, {
      method: "put",
      body: JSON.stringify({
        name,
        phone,
        email,
        address,
        city,
        state,
        zip,
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
// delete product
async function deleteProduct(event) {
  event.preventDefault();
  const productId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/products/${productId}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

// delete supplier
async function deleteSupplier(event) {
  event.preventDefault();
  const supplierId = supplierForm.getAttribute("supplier_id");

  const response = await fetch(`/api/suppliers/${supplierId}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

//add stock
async function addStock(event, id) {
    event.preventDefault();
    const productId = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const slot = document.querySelector("#add-stock-slot").value.trim();
    const quantity = document.querySelector("#add-stock-quantity").value.trim();
    
    if (slot && quantity) {
        const response = await fetch(`/api/locations`, {
            method: "post",
            body: JSON.stringify({
                slot,
                quantity,
                "user_id": id,
                "product_id": productId,
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



// update stock
async function submitStockForm(event, id) {
  event.preventDefault();

  const slot = document.querySelector(`#stock-slot-${id}`).value.trim();
  const quantity = document.querySelector(`#stock-quantity-${id}`).value.trim();

  if (slot && quantity) {
    const response = await fetch(`/api/locations/${id}`, {
      method: "put",
      body: JSON.stringify({
        slot,
        quantity,
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

// delete stock
async function deleteStock(event, id) {
  event.preventDefault();

  const response = await fetch(`/api/locations/${id}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload();
  } else {
    alert(response.statusText);
  }
}

productForm.addEventListener("submit", updateProduct);
supplierForm.addEventListener("submit", updateSupplier);

document.querySelector("#deleteBtn").addEventListener("click", deleteProduct);
document
  .querySelector("#deleteSupplierBtn")
  .addEventListener("click", deleteSupplier);
