function menu(){
    let menu= document.querySelector('.mobile-menu')
    if(menu.classList.contains('open')){
        menu.classList.remove('open')
        document.querySelector('.icons').src="imagens/menu.png"
    }
    else{
        menu.classList.add('open')
        document.querySelector('.icons').src="imagens/icon-x.png"
    }

}
