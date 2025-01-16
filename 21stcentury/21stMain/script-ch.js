let lastScrollTop = 0;

function handleScroll() {
    const sections = document.querySelectorAll('section');
    let st = window.pageYOffset || document.documentElement.scrollTop;
    const returnToTop = document.querySelector('.return-to-top');
    const profileSection = document.getElementById('profiles')


    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const isVisible = st >= sectionTop - window.innerHeight * 0.8 && st <= sectionTop + sectionHeight + window.innerHeight * 0.3;

       if (isVisible) {
             section.classList.add('fade-in-up');

         }
          else {
              section.classList.remove('fade-in-up');
           }
    });
      if (profileSection && st > profileSection.offsetTop + profileSection.offsetHeight) {
          returnToTop.classList.add('show');
      } else {
         returnToTop.classList.remove('show');
       }
    lastScrollTop = st <= 0 ? 0 : st;
}


window.addEventListener('scroll', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);

// add return to top button javascript logic
 const returnToTopBtn = document.createElement('div')
 returnToTopBtn.classList.add('return-to-top')
 returnToTopBtn.innerHTML = '↑'
 document.body.appendChild(returnToTopBtn)


 returnToTopBtn.addEventListener('click', () => {
  window.scrollTo({
   top: 0,
   behavior: 'smooth'
  });
 });