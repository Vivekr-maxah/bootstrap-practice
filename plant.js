const plantsData = [
  {
    category: "Cacti",
    name: "Aloe Juvenna",
    price: "$85.00",
    image: "./plantimage/asset 2.jpeg",
    rating: 3,
  },
  {
    category: "Plants",
    name: "Bird of Paradise",
    price: "$50.00",
    image: "./plantimage/asset 3.jpeg",
    rating: 4,
  },
  {
    category: "Cacti",
    name: "Christmas Cactus",
    price: "$80.00",
    image: "./plantimage/asset 4.jpeg",
    rating: 3,
  },
  {
    category: "Plants",
    name: "Fiddle Leaf Fig",
    price: "$63.00",
    image: "./plantimage/asset 5.jpeg",
    rating: 3,
  },
];

function createStarRating(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}

function renderPlants(plants) {
  const container = document.createElement("div");
  container.className = "row";

  plants.forEach((plant) => {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML += `
        <img
          class="w-100 img-fluid"
          src="${plant.image}"
          alt="${plant.name}"
          style="margin-top: 20%"
        />
        <div class="row">
          <div class="col h5">${plant.category}</div>
        </div>
        <div class="row">
          <div class="col h5">
            ${plant.name}<br />Plant
          </div>
        </div>
        <div class="row">
          <div class="col">
            ${createStarRating(plant.rating)}
          </div>
        </div>
        <div class="row">
          <div class="col">${plant.price}</div>
        </div>
      `;

    container.appendChild(col);
  });

  document.getElementById("mostpopularplants").appendChild(container);
}

// Call the function to render the plants
document.addEventListener("DOMContentLoaded", () => {
  renderPlants(plantsData);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.className = "row p-5";

  // Data for the columns
  const columns = [
    {
      icon: "fa-solid fa-truck",
      title: "Fast Delivery",
      description:
        "Lorem ipsum dolor sit amet,<br />adipiscing elit, sed do <br />eiusmod tempor<br />consectetur",
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Order Tracking",
      description:
        "Lorem ipsum dolor sit amet,<br />adipiscing elit, sed do <br />eiusmod tempor<br />consectetur",
    },
    {
      icon: "fa-solid fa-file-shield",
      title: "Secure Payment",
      description:
        "Lorem ipsum dolor sit amet,<br />adipiscing elit, sed do <br />eiusmod tempor<br />consectetur",
    },
    {
      icon: "fa-solid fa-percent",
      title: "Big Discounts",
      description:
        "Lorem ipsum dolor sit amet,<br />adipiscing elit, sed do <br />eiusmod tempor<br />consectetur",
    },
  ];

  // Create columns dynamically
  columns.forEach((col) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col h3";

    // Icon
    const icon = document.createElement("i");
    icon.className = col.icon;
    colDiv.appendChild(icon);

    // Title
    const titleRow = document.createElement("div");
    titleRow.className = "row";
    const titleCol = document.createElement("div");
    titleCol.className = "col h4 mt-2";
    const titleSpan = document.createElement("span");
    titleSpan.textContent = col.title;
    titleCol.appendChild(titleSpan);
    titleRow.appendChild(titleCol);
    colDiv.appendChild(titleRow);

    // Description
    const descRow = document.createElement("div");
    descRow.className = "row";
    const descCol = document.createElement("div");
    descCol.className = "col h5 mt-3";
    const descSpan = document.createElement("span");
    descSpan.innerHTML = col.description;
    descCol.appendChild(descSpan);
    descRow.appendChild(descCol);
    colDiv.appendChild(descRow);

    // Append column to container
    container.appendChild(colDiv);
  });
});

//   ------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.className = "row gap-5 p-5";

  // Data for the columns
  const columns = [
    {
      icon: "fa-solid fa-truck",
      title: "Fast Delivery",
      description:
        "Lorem ipsum dolor sit amet,<br />adipiscing elit, sed do <br />eiusmod tempor<br />consectetur",
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Order Tracking",
      description:
        "Lorem ipsum dolor sit amet,<br />adipiscing elit, sed do <br />eiusmod tempor<br />consectetur",
    },
    {
      icon: "fa-solid fa-file-shield",
      title: "Secure Payment",
      description:
        "Lorem ipsum dolor sit amet,<br />adipiscing elit, sed do <br />eiusmod tempor<br />consectetur",
    },
    {
      icon: "fa-solid fa-percent",
      title: "Big Discounts",
      description:
        "Lorem ipsum dolor sit amet,<br />adipiscing elit, sed do <br />eiusmod tempor<br />consectetur",
    },
  ];

  // Create columns dynamically
  columns.forEach((col) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col h3";

    // Icon
    const icon = document.createElement("i");
    icon.className = col.icon;
    colDiv.appendChild(icon);

    // Title
    const titleRow = document.createElement("div");
    titleRow.className = "row";
    const titleCol = document.createElement("div");
    titleCol.className = "col h4 mt-2";
    const titleSpan = document.createElement("span");
    titleSpan.textContent = col.title;
    titleCol.appendChild(titleSpan);
    titleRow.appendChild(titleCol);
    colDiv.appendChild(titleRow);

    // Description
    const descRow = document.createElement("div");
    descRow.className = "row";
    const descCol = document.createElement("div");
    descCol.className = "col h5 mt-3";
    const descSpan = document.createElement("span");
    descSpan.innerHTML = col.description;
    descCol.appendChild(descSpan);
    descRow.appendChild(descCol);
    colDiv.appendChild(descRow);

    // Append column to container
    container.appendChild(colDiv);
  });

  // Append container to body or another element
  document.getElementById("products").appendChild(container);
});
