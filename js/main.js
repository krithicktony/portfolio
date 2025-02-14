var typed = new Typed('.autotype', {
    // Waits 1000ms after typing "First"
    strings: ['Front End Developer.', 'Web Developer.','Programmer.'],
    loop:true,
    typeSpeed: 150,
    backSpeed: 200,
  });
  AOS.init();
  const hammenu = document.querySelector('.ham-menu')
  const navright = document.querySelector('.navright')
  hammenu.addEventListener('click', () =>{
    navright.style.display = 'flex'
    hammenu.classList.toggle('active');
    navright.classList.toggle('active');
  })