
// Make a list of images for JS to use
const merchImages = [
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
    '../logo/wolfpackpod.png',
];

// Call shop grid container
const shopGrid = document.getElementById('shopGrid');

// This function create merch cards
function loadMerch() {
    merchImages.forEach((image) => {
        const merchCard = document.createElement('div');
        merchCard.classList.add('merch-card');

        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Merchandise Image';
 
// Append "merch cards" to the grid (different products)
        merchCard.appendChild(img);
        shopGrid.appendChild(merchCard);
    });
}

// Call the function so shop page contents load
loadMerch();
