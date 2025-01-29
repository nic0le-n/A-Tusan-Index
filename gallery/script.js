// Get modal and image elements
const modal = document.getElementById("lightboxModal");
const lightboxImage = document.getElementById("lightboxImage");

// Get all images in the gallery
const images = document.querySelectorAll(".gallery-img");

// Add event listeners to each image to open the modal with the clicked image
images.forEach((img) => {
    img.addEventListener("click", () => {
        const imgSrc = img.src; // Get the source of the clicked image
        openModal(imgSrc); // Open the modal with the clicked image
    });
});

// Function to open the modal
function openModal(src) {
    lightboxImage.src = src; // Set the source of the lightbox image
    modal.style.display = "flex"; // Show the modal
}

// Function to close the modal when the close button is clicked
function closeModal() {
    modal.style.display = "none"; // Hide the modal
}
