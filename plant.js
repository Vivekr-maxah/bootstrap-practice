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

// ---------json-code-------
function header() {
  let div = document.createElement("div");
  div.classList = "ro";
}

// ------------------json-code----------------

const jsondata = {
  logo: "./plantimage/asset 9.png",
  menuItems: [
    {
      label: "Shop All",
      action: "/shop",
      position: "left",
      type: "text",
    },
    {
      label: "Plants",
      action: "/product-category/plants",
      position: "left",
      type: "text",
    },
    {
      label: "Cacti",
      action: "/product-category/cacti",
      position: "left",
      type: "text",
    },
    {
      label: "Our Story",
      action: "/home",
      position: "right",
      type: "text",
    },
    {
      label: "QUESTIONS?",
      action: "/contact",
      position: "right",
      type: "text",
    },
    {
      label: "Shopping Cart",
      action: "/shopping-cart",
      position: "right",
      type: "icon",
      iconURL: "fa-solid fa-truck-fast text-dark",
    },
    {
      label: "Account",
      action: "/my-account",
      position: "right",
      type: "icon",
      iconURL: "fa-solid fa-circle-user fs-3 text-black",
    },
  ],
  mainSection: {
    title: "Bird of Paradise Plant",
    subtitle: "Plants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris efficitur elementum.",
    price: "$65.00",
    discountedPrice: "$50.00",
    actionButton: "Add to cart",
    heroImage: "./plantimage/asset 1.png",
  },
};

// create the header
function Header(config) {
  const header = document.createElement("header");
  header.className = "shadow-sm";

  const container = document.createElement("div");
  container.className = "container";

  const row = document.createElement("div");
  row.className = "row align-items-center";

  // Left column logo and menu items
  const leftCol = document.createElement("div");
  leftCol.className = "col d-flex align-items-center gap-3";

  // Right column menu items
  const rightCol = document.createElement("div");
  rightCol.className =
    "col d-flex justify-content-end align-items-center gap-3";

  // logo
  const logoLink = document.createElement("a");
  logoLink.href = "#";
  const logoImg = document.createElement("img");
  logoImg.src = config.logo;
  logoImg.alt = "logo";
  logoImg.className = "navbar-brand";
  logoLink.appendChild(logoImg);
  leftCol.appendChild(logoLink);

  // Add menu items
  config.menuItems.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.action;
    link.className = "nav-link";

    if (item.type === "text") {
      link.textContent = item.label;
      item.position === "left"
        ? leftCol.appendChild(link)
        : rightCol.appendChild(link);
    } else if (item.type === "icon") {
      const icon = document.createElement("i");
      item.iconURL.split(" ").forEach((cls) => icon.classList.add(cls));
      link.appendChild(icon);
      rightCol.appendChild(link);
    }
  });

  // Append columns to the row
  row.appendChild(leftCol);
  row.appendChild(rightCol);

  // Append row to the container
  container.appendChild(row);

  // Append container to the header
  header.appendChild(container);

  // Prepend the header to the body
  document.body.prepend(header);
}

document.addEventListener("DOMContentLoaded", () => {
  Header(jsondata);
});

// ----------------------------------------------------
function heroSection(mainSectionData) {
  let data = Object.entries(mainSectionData);
  data.pop();
  for (const [key, value] of data) {
    document.getElementById(key).textContent = value;
  }

  document.getElementById("heroImage").src = mainSectionData.heroImage;
}

heroSection(jsondata.mainSection);
