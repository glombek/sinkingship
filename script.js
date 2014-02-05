function setup() {
  var h = decodeURIComponent(window.location.hash.replace("#", ''));
  var n = $("#name").text();
  if(h && h != n) {
    $("#name").text(h);
  }
  $("#url").text(window.location);
  document.title = (h || n) + " is Sinking!";
}

$("#name").on("input",function() {
  window.location.hash = encodeURIComponent($("#name").text());
});
$(window).on("hashchange", setup);
setup();