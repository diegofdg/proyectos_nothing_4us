let lvl = 1;
$("button").on("click", function () {
  lvl++;
  if (lvl > 5) lvl = 1;
  $("#expander").removeClass("lvl1 lvl2 lvl3 lvl4 lvl5");
  $("#expander").addClass("lvl" + lvl);
  $(this).removeClass("press");
  setTimeout(function () {
    $("button").addClass("press");
  }, 10);
});