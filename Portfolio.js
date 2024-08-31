const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('#home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
        </script>

<script>
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slider-item');
  let currentIndex = 0;

  function updateSlideWidth() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function showSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      else if (index < 0) currentIndex = slides.length - 1;
      else currentIndex = index;
      
      updateSlideWidth();
  }

  prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
  nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

  window.addEventListener('resize', updateSlideWidth);

  // Optional: auto-slide functionality
 // setInterval(() => showSlide(currentIndex + 1), 5000);

  // Initial call to set the slide width
  updateSlideWidth();
</script>
<script>
  const text = "Haseeb,<br> Software Developer";
  const typingTextElement = document.querySelector(".typing-text");
  let index = 0;

  function type() {
      if (index < text.length) {
          if (text.charAt(index) === "<") {
              typingTextElement.innerHTML += text.slice(index, index + 4);
              index += 4;
          } else {
              typingTextElement.innerHTML += text.charAt(index);
              index++;
          }
          setTimeout(type, 100); // Adjust typing speed here
      }
  }

  document.addEventListener("DOMContentLoaded", function() {
      type();
  });
