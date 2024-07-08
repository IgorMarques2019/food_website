window.onload = () => {

  function menuMobile() {
    let menuMobile = document.querySelector('header ul')
    let toggleMenu = document.querySelector('#mobile-menu')
    let mobileMenu = window.matchMedia('(max-width:768px)').matches;
    let contatoLink = document.querySelector('#contact-link')
    let links

    function menuActive(active) {
      if (active) {
        if (menuMobile.classList.contains('menu-active')) {
          menuMobile.classList.remove('menu-active')
        }
        menuMobile.appendChild(contatoLink)


      } else {
        document.querySelector('.cart-area').appendChild(contatoLink)
        menuMobile.classList.remove('menu-active')
      }

      toggleMenu.addEventListener('click', () => {
        menuMobile.classList.add('menu-active')
        let linksMenu = menuMobile.querySelectorAll('a')
        linksMenu.forEach((item) => {
          item.addEventListener('click',(e)=>{
            e.preventDefault()
            menuMobile.classList.remove('menu-active')
          })
        })


      })
    }




    window.addEventListener('resize', () => {
      mobileMenu = window.matchMedia('(max-width:768px)').matches
      menuActive(mobileMenu)
    })

    menuActive(mobileMenu)






  }
  menuMobile()

}