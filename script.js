const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navmenu = document.querySelector('.navmenu');
const content = document.querySelector('.content'); // Assuming your content has the class "content"

// Function to update header position on scroll
function updateHeaderPosition() {
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Function to scroll the header with the content
function scrollHeaderWithContent() {
    const scrollPosition = content.scrollTop;
    header.style.transform = `translateY(${scrollPosition}px)`;
}

// Event listener for scrolling the content
content.addEventListener("scroll", () => {
    scrollHeaderWithContent();
});

// Event listener for the menu click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};

// Initialize header position
updateHeaderPosition();

// Update header position on window scroll
window.addEventListener("scroll", () => {
    updateHeaderPosition();
});
