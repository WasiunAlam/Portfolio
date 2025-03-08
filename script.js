let portfolio=document.querySelector('.portfolio')
let showProject=document.querySelectorAll('.show-project')
portfolio.addEventListener('click',() => {
  showProject[0].style.display='block'
})
document.querySelector('.responsive').addEventListener('click',() => {
  showProject[1].style.display='block'
})
document.querySelector('.landing').addEventListener('click', () => {
  showProject[2].style.display='block'
})
document.querySelector('.animation').addEventListener('click', () => {
  showProject[3].style.display='block'
})
document.querySelector('.javascript').addEventListener('click', () => {
  showProject[4].style.display='block'
})
document.querySelector('.bootstrap').addEventListener('click', () => {
  showProject[5].style.display='block'
})
let i1=document.querySelectorAll('.i1')

i1[0].addEventListener('click',() => {
  showProject[0].style.display='none'
})

i1[1].addEventListener('click',() => {
  showProject[1].style.display='none'
})
i1[2].addEventListener('click',() => {
  showProject[2].style.display='none'
})
i1[3].addEventListener('click',() => {
  showProject[3].style.display='none'
})
i1[4].addEventListener('click',() => {
  showProject[4].style.display='none'
})
i1[5].addEventListener('click',() => {
  showProject[5].style.display='none'
})



document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from redirecting

  const formData = new FormData(this); // Get form data

  fetch("https://formspree.io/f/xjkybppq", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("responseMessage").innerText = "Thank you! Your message has been sent.";
      document.getElementById("contactForm").reset(); // Clear form fields
  })
  .catch(error => {
      document.getElementById("responseMessage").innerText = "Something went wrong. Try again.";
  });
});
ScrollReveal().reveal('.header');
ScrollReveal().reveal('.hero-text',{origin:'left',distance:'200px',duration:1000});
ScrollReveal().reveal('.skill-heading');
ScrollReveal().reveal('.skill-section',{origin:'left',distance:'1000px',duration:1000});

ScrollReveal().reveal('.project-card',{origin:'right',distance:'2000px',duration:3000});

ScrollReveal().reveal('.contact');
