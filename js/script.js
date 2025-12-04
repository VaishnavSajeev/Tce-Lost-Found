
const listings = [
    {
        title: "Fossil Watch",
        student: "Muthu Pandi",
        location: "Hostel",
        date: "2025-02-01",
        type: "Lost",
        category: "Accessories",
        img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "iPhone",
        student: "Nandamuri Lithish Kumar Reddy",
        location: "Cafeteria",
        date: "2025-02-02",
        type: "Found",
        category: "Electronics",
        img: "https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Wallet",
        student: "Kathir Kumar",
        location: "Cafeteria",
        date: "2025-02-02",
        type: "Found",
        category: "Wallet",
        img: "https://images.pexels.com/photos/4452503/pexels-photo-4452503.jpeg"
    },
    
    
   
    {
        title: "Earbuds",
        student: "Ajith Logesh",
        location: "Parking Area",
        date: "2025-02-03",
        type: "Lost",
        category: "Accessories",
        img: "https://images.unsplash.com/photo-1655560378428-7605bda51749?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Shoes",
        student: "Bala Naren",
        location: "Main Gate",
        date: "2025-02-03",
        type: "Lost",
        category: "Accessories",
        img: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg"
    },
    {
        title: "Maths Notebook",
        student: "Harisaran",
        location: "Hostel",
        date: "2025-02-02",
        type: "Found",
        category: "Accessories",
        img: "https://images.pexels.com/photos/3650937/pexels-photo-3650937.jpeg"
    }
    
];



function renderItems(data) {
    const container = document.getElementById("listing-container");
    container.innerHTML = ""; // clear previous items

    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "col-12 col-md-6 col-lg-4 mb-3";

        div.innerHTML = `
            <div class="card shadow-sm h-100">
                <img src="${item.img}" class="card-img-top item-image" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title item-title">${item.title}</h5>
                    <p class="card-text mb-1"><strong>Student:</strong> ${item.student}</p>
                    <p class="card-text mb-1"><strong>Location:</strong> ${item.location}</p>
                    <p class="card-text mb-1"><strong>Date:</strong> ${item.date}</p>

                    <span class="badge bg-${item.type === 'Lost' ? 'danger' : 'success'}">
                        ${item.type}
                    </span>
                    <span class="badge bg-secondary">${item.category}</span>
                </div>
            </div>
        `;

        container.appendChild(div);
    });
}



function applyFilters() {
    const type = document.getElementById("filter-type").value;
    const location = document.getElementById("filter-location").value;
    const date = document.getElementById("filter-date").value;
    const category = document.getElementById("filter-category").value;

    const filtered = listings.filter(item => 
        (type === "" || item.type === type) &&
        (location === "" || item.location === location) &&
        (date === "" || item.date === date) &&
        (category === "" || item.category === category)
    );

    renderItems(filtered);
}


// -----------------------------
// EVENT LISTENER FOR SEARCH BUTTON
// -----------------------------
document.getElementById("search-btn").addEventListener("click", applyFilters);


// -----------------------------
// INITIAL RENDER
// -----------------------------
renderItems(listings);



// 

