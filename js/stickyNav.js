window.onscroll = function() {
    myFunction();
};

function myFunction() {
    const header = document.querySelector("header");
    const body = document.querySelector("body");
    const threshold = 0; // Adjust this value to set how far the user scrolls before the header shrinks

    if (window.pageYOffset > threshold) {
        header.classList.add("sticky");
        body.style.paddingTop = "150px"; // Add padding-top when sticky
    } else {
        header.classList.remove("sticky");
        if (window.pageYOffset === 0) {
            body.style.paddingTop = "0"; // Remove padding-top when not scrolling
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const fejlec = document.querySelector('.fejléc');

    fejlec.addEventListener('click', function() {
        if (window.innerWidth <= 1024 && header.classList.contains('sticky')) {
            header.classList.toggle('expanded');
        }
    });
});

