// update category
async function updateCategory(event) {
  event.preventDefault();
  const categoryId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  const name = document.querySelector("#update-category-name").value.trim();

  if (name) {
    const response = await fetch(`/api/categories/${categoryId}`, {
      method: "put",
      body: JSON.stringify({
        name,
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

// delete category
async function deleteCategory(event) {
  event.preventDefault();
  const categoryId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/categories/${categoryId}`, {
    method: "delete",
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}