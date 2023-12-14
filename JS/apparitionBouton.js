const boutonApparaitre = document.querySelector('.btn');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    if (scrollTop > 425) {
        boutonApparaitre.classList.add('active')
    }
    if (scrollTop < 425) {
        boutonApparaitre.classList.remove('active')
    }
    console.log(scrollTop)
    
})

