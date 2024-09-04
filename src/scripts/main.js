(function(){
    const btn = document.querySelector('.menu__mobile')

    btn.addEventListener('click', btnMolibe)

    efeitohover()

    function btnMolibe(){
        const navBar = document.querySelector('.nav__content')

        navBar.classList.toggle('nav__content--is-active')

    }

    function efeitohover(){
        const items = document.querySelectorAll('.nav__content__item');

        items.forEach(function(item){
            item.onmousemove = function(e){
                let x = e.pageX - item.offsetLeft
                let y  = e.pageY - item.offsetTop
        
            
        
                item.style.setProperty('--eixoX', x + 'px')
                item.style.setProperty('--eixoY', y + 'px')
            }
        
        })
    }

})()