// for hamberger-menu

  $(document).ready(function() {
    var $menuList = $(".menu");
  
    $(".nav").click(function() {
      $(this).toggleClass("nav__btn-active");
      $menuList.toggleClass("menu__list--opened");
    });
  });
  