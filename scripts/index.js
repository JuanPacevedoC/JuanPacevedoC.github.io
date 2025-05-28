const menuFijo =  () =>{
    window.addEventListener('scroll', () => {
    const navegacion = document.querySelector('ul')
    navegacion.classList.toggle('scroll', window.scrollY)
    })
}


const darkMode = () => {
    const input = document.querySelector('.input');
    input.addEventListener('change', () => {
        document.body.classList.toggle('body-dark');
    });
};


menuFijo()
darkMode()