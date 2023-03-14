const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener( "click",()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


// nav bar 

const navbar = document.querySelector('nav')

window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 50 ) {
    navbar.classList.add('active')
  } else if (navbar.classList.contains('active')) {
    navbar.classList.remove('active')
  } else {
    navbar.classList.remove('active')
  }
})

// accordian --------------------------


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener("click", ()=>{
    faq.classList.toggle('open');
 
  // icon change 
  const icon = faq.querySelector('.faqs-icon i');
  if(icon.className === "uil uil-plus"){
    icon.className = "uil uil-minus"
  }
  else{
    icon.className = "uil uil-plus"
  }

})
});


