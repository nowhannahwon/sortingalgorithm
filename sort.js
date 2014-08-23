$('p').each(function(index) {
    rand = Math.floor(Math.random()*20);
    $(this)
    .fadeIn(2000)
    .css('display', 'block')
    .text(rand)
    .width(rand + "%");
  });

$('#buttondiv').click(function() {
  $('.number').each((function() {
    var $next = $(this).next();
    var firstnumber = parseInt($(this).text());
    var secondnumber = parseInt($next.text());
    if (firstnumber > secondnumber) {
      $next.insertBefore($(this));
    } else {
      return $(this);
    }
  }))
})
