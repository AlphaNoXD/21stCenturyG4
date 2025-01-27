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

document.querySelector('header nav a[href="#space"]').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Click on image to zoom!');
});

document.querySelector('header nav a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Contact button clicked!');
});

 //  Modal for images in space

const modal = document.getElementById('image-modal');
 const modalImage = document.getElementById('modal-image');
 const closeButton = document.querySelector('.close-button');
 const galleryItems = document.querySelectorAll('.gallery-item');


  let currentModalImageIndex = 0;
   let isAnimating = false; // Flag to prevent multiple animations


 function updateModalImage(index, isNext) {
      if (isAnimating) return; // Prevent animation if another is running

        isAnimating = true;

         modalImage.classList.add(isNext ? 'flip-next' : 'flip-prev');
          setTimeout( () => {
              modalImage.classList.remove(isNext ? 'flip-next' : 'flip-prev');
               const imageUrl = galleryItems[index].querySelector('img').src;
                 modalImage.src = imageUrl;
              isAnimating = false;
           }, 500)
     }


   galleryItems.forEach((item, index) => {
    item.addEventListener('click', function(e) {
           e.preventDefault();
            currentModalImageIndex = index;
         updateModalImage(index, false); // added a parameter
           modal.style.display = 'block';
       });
 });

const prevBtn = document.querySelector('.modal-button.prev');
  const nextBtn = document.querySelector('.modal-button.next');

   nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentModalImageIndex = (currentModalImageIndex + 1) % galleryItems.length;
       updateModalImage(currentModalImageIndex, true);
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentModalImageIndex = (currentModalImageIndex - 1 + galleryItems.length) % galleryItems.length;
       updateModalImage(currentModalImageIndex, false);
  });

   closeButton.addEventListener('click', function() {
     modal.style.display = 'none';
        modalImage.src = "";
   });

   window.addEventListener('click', function(event) {
     if (event.target === modal) {
       modal.style.display = 'none';
        modalImage.src = "";
     }
 });