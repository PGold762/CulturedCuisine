let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.marginLeft = "0";  // Set initial position

    // Slide out the previous image
    if (slideIndex > 1) {
        slides[slideIndex - 2].style.marginLeft = "-100%";
    } else {
        slides[slides.length - 1].style.marginLeft = "-100%";
    }

    setTimeout(showSlides, 2000);  // Change slide every 2 seconds
}