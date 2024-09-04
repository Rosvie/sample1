// $(document).ready(function() {
    
    // video popup
    var displayvideo = document.querySelector('#show-video')
    var playbutton = document.querySelector('#play-video')
    var closebutton = document.querySelector('#video-close-button')

    
    playbutton.onclick = function(){
      displayvideo.style.display = "block"
    }
    
    closebutton.onclick = function(){
      displayvideo.style.display="none"
    }
    
    window.onclick= function(event){
      if(event.target == displayvideo)
        {
          displayvideo.style.display = "none"
        }
    }
    

    // burger menu
    const burger = document.querySelector("#hamburger_menu");
    const navMenu = document.querySelector(".nav_menu");

    burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav_menu li a").forEach((n) =>
    n.addEventListener("click", () => {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
    })
    );


// });