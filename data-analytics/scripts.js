// menu-1 - function for displaying menu
function menuOneShow(){
    document.getElementById('menu-1').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
  // menu-2 - function for displaying menu
  function menuTwoShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.add('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
  // menu-3 - function for displaying menu
  function menuThreeShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.add('show');
  }
  
  // Function for hiding menu when not hovering
  function menusHide() {
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
  // Hover event for each menu 
  
  document.getElementById('menu-1-button').addEventListener('mouseover', menuOneShow);
  document.getElementById('menu-2-button').addEventListener('mouseover', menuTwoShow);
  document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
  
  
  // hides menus when not hovering over link
  document.getElementById('menu-1').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-2').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-3').addEventListener('mouseleave', menusHide);
  
  
  // Side menu - event listener for for side menu menu when clicking
  document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
  document.getElementById('close-menu').addEventListener('click', sideMenuDisappears);
  
  // Side menu appears
  function sideMenuAppears() {
    document.getElementById('side-menu').classList.add('show-menu');
  }
  
  // Side menu disappears
  function sideMenuDisappears() {
    document.getElementById('side-menu').classList.remove('show-menu');
  }
  
  
  /* Slick carousel */

  $("input.slider").on("input change", function(event) {
      var element = $(this).parents("div.container");
      var pos = event.target.value;
      
    element.find("div.before").css({width: pos + "%"});
      element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
  });
  
  $(document).ready(function(){
      $('.customer-logos').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1700,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [{
              breakpoint: 820,
              settings: {
                  slidesToShow: 4
              }
          }, {
              breakpoint: 420,
              settings: {
                  slidesToShow: 3
              }
          }]
      });
  });
  
  // Accordion
  // Get all elements
  let acc = document.getElementsByClassName("accordion");
  let i;
  
  // Looping through the collection and adding event to each element
  for (i = 0; i < acc.length; i++) {
    // Adding onclick event to each element
    acc[i].addEventListener("click", function() {
     
      // Toggles between adding and removing active class
      this.classList.toggle("active");
  
      // Toggles between adding and removing active panel
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
