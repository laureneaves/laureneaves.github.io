// menu-1
function menuOneShow(){
    document.getElementById('menu-1').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
  // menu-2
  function menuTwoShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.add('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
  // menu-3
  function menuThreeShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.add('show');
  }
  
  // Hide menus
  function menusHide() {
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
  }
  
  // Hover event for each menu 
  
  document.getElementById('menu-1-button').addEventListener('mouseover', menuOneShow);
  document.getElementById('menu-2-button').addEventListener('mouseover', menuTwoShow);
  document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
  
  
  // hides menus - hover status
  document.getElementById('menu-1').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-2').addEventListener('mouseleave', menusHide);
  document.getElementById('menu-3').addEventListener('mouseleave', menusHide);
  
  
  // Side menu
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
  
      
  
