const banniere = document.querySelector('.HautPage');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    if (scrollTop > 800) {
      banniere.classList.add('active')
    }
    if (scrollTop < 800) {
        banniere.classList.remove('active')
    }
    console.log(scrollTop)
    
})

