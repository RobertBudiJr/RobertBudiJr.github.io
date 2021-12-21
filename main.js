// Desktop Nav
const options = {
  threshold: 0.5,
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
      // console.log(entry.target);
      let currentActive = document.querySelector('.navbar a.active');

      if (currentActive) {
        currentActive.classList.remove('active');
      }

      let newActive = document.querySelector(`.navbar a[href="#${entry.target.getAttribute('id')}"]`);

      newActive.classList.add('active');
    }
  });
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  observer.observe(section);
});
