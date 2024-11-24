let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    // Ellenőrzés, hogy ha a n értéke nagyobb mint a slide-ok száma, akkor az első slide-ot mutatjuk
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Ellenőrzés, hogy ha a n értéke kisebb mint 1, akkor az utolsó slide-ot mutatjuk
    if (n < 1) {
        slideIndex = slides.length;
    }
    // Minden slide elemet elrejtünk
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Minden dot (pont) elemről eltávolítjuk az "active" osztályt
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Az aktuális slide-ot megjelenítjük
    slides[slideIndex-1].style.display = "block";
    // Az aktuális dot (pont) elemhez hozzáadjuk az "active" osztályt
    dots[slideIndex-1].className += " active";
}
