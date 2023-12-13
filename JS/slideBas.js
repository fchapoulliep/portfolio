const descendre = document.querySelector('.btnDescendre');

descendre.addEventListener('click', () => {

    window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth"
    })

})

