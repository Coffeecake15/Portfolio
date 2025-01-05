
    function openModal(src) {
        document.getElementById("zoomIn").src = src;
        document.getElementById("theImage").style.display = "block";
    }

    function closeModal() {
        document.getElementById("theImage").style.display = "none";
    }

let slideIndex = 0;
slideShow();

function slideShow() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
