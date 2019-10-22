$(document).ready(color() {
  $('.row').each(color() {
      var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("background-color", hue);
  });
});