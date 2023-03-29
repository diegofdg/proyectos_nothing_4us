$(document).ready(function() {
  
  var animating = false;
  
  function menuToggle() {
    $(".demo__page, .demo__menu, .demo__light").toggleClass("menu-active");
    $(".js-menuBtn").toggleClass("m--btn");
    $(document).off("click", ".demo__content", closeNotFocusedMenu);
  };
  
  function closeNotFocusedMenu(e) {
    if (!$(e.target).closest(".demo__menu").length) {
      menuToggle();
      $(document).off("click", ".demo__content", closeNotFocusedMenu);
    }
  };
  
  $(document).on("click", ".js-menuBtn", function() {
    if (animating) return;
    menuToggle();
    $(document).on("click", ".demo__content", closeNotFocusedMenu);
  });
  
  $(document).on("click", ".demo__menu-item:not(.js-menuBtn)", function() {
    animating  = true;
    var $this = $(this);
    var page = +$this.data("page");
    $(".js-menuBtn").removeClass("js-menuBtn");
    $(".demo__page.active").removeClass("active");
    $this.addClass("js-menuBtn m--btn");
    $(".demo__page-"+page).addClass("active");
    $(".demo__page, .demo__menu, .demo__light").removeClass("menu-active");
    $(document).off("click", ".demo__content", closeNotFocusedMenu);
    setTimeout(function() {
      $(".demo__menu")[0].className = $(".demo__menu")[0].className.replace(/\bpage-active-.*\b/gi, "");
      $(".demo__menu").addClass("page-active-"+page);
      animating = false;
    }, 1000);
  });
  
});