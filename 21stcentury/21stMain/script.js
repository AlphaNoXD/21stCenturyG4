document.addEventListener('DOMContentLoaded', function() {

  document.body.classList.add('desktop-mode');
 });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('header nav a[href="#tech"]').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Click on Profiles to view Individual Activities!');
});

document.querySelector('header nav a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Contact button clicked!');
});


 // Flipbook functionality

    const flipbookContainer = document.querySelector('.flipbook-container');
    if (flipbookContainer) {
      const images = document.querySelectorAll('.flipbook-image');
        const prevBtn = document.querySelector('.flipbook-button.prev');
       const nextBtn = document.querySelector('.flipbook-button.next');

         let currentImageIndex = 0;

      function showImage(index) {
       images.forEach((image, i) => {
            if (i === index) {
               image.classList.add('active');
           } else {
                 image.classList.remove('active');
           }
         });
       }
      function nextImage(){
         currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
      }
         function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }

       showImage(currentImageIndex); // Show the first image

          nextBtn.addEventListener('click', nextImage);
         prevBtn.addEventListener('click', prevImage);


 }