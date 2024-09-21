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
    // const burger = document.querySelector("#hamburger_menu");
    // const navMenu = document.querySelector(".nav_menu");

    // burger.addEventListener("click", () => {
    // burger.classList.toggle("active");
    // navMenu.classList.toggle("active");
    // });

    // document.querySelectorAll(".nav_menu li a").forEach((n) =>
    // n.addEventListener("click", () => {
    //     burger.classList.remove("active");
    //     navMenu.classList.remove("active");
    // })
    // );


  //   document.getElementById('hamburger_menu').addEventListener('click', function() {
  //     // Toggle 'active' class on both hamburger and nav menu
  //     this.classList.toggle('active');
  //     document.querySelector('.nav_menu').classList.toggle('active');
  // });


  document.getElementById('hamburger_menu').addEventListener('click', function() {
    // Toggle 'active' class on both hamburger and nav menu
    this.classList.toggle('active');
    document.querySelector('.nav_holder').classList.toggle('active');
});


// Slider
const slidesContainer = document.getElementById("slider_boxes");
const slide = document.querySelector(".slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


  

// });