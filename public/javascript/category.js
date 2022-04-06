// Fetch to create a new category
const category_form = document.querySelector(".category-form");

const category_form_handler = async (event) => {
  event.preventDefault();

  const category_name = document.querySelector("#category-name").value.trim();

  if (category_name) {
    const response = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({ name: category_name }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create category.");
    }
  } else {
    alert("Please enter a category name.");
  }
};

category_form.addEventListener("submit", category_form_handler);
