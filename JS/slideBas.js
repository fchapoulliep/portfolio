const descendre = document.querySelector('.btnDescendre');

descendre.addEventListener('click', () => {

    window.scrollTo({
        top: 400,
        left: 0,
        behavior: "smooth"
    })

})

