const myelement = document.getElementById('is_fixed')

function isScrolled(){
    if(window.scrollY > 100){
        myelement.style.transition = "0.3s"
        myelement.classList.add('is-scroll')
    }
    else {
        myelement.style.transition = "0.3s"
        myelement.classList.remove('is-scroll')
    }
}
