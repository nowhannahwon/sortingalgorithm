//Each hidden <p> element will fade in on page load
//The text and width of each element will be a random number from 0-20
$('p').each(function(index) {
    rand = Math.floor(Math.random()*20);
    $(this)
    .fadeIn(2000)
    .css('display', 'block')
    .text(rand)
    .width(rand + "%");
  });

//Using the bubble sort algorithm, for each click,
//the value of each element will be compared to the
//value of the next adjacent element. If the first value
//is larger, then the elements will switch places in the DOM.

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
