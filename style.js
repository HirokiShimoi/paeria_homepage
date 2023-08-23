document.addEventListener('DOMContentLoaded', function() {

  const feature_titles = document.querySelectorAll('.feature_child');
  const cb = (entries,observer) =>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('inview');
      } 
    });
  } 
  const io = new IntersectionObserver(cb);
  feature_titles.forEach(title => {
    io.observe(title);
  });

  const logoContainer = document.querySelector('.logo_inner');
  const logoImages = logoContainer.querySelectorAll('img');
  const logoWidth = logoImages[0].offsetWidth;
  logoContainer.style.animationDuration = (logoWidth / 100) + 's';

});
