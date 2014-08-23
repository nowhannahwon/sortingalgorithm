// $('p')
//   .each(function(index) {
//   $(this)
//   .fadeIn(2000)
//   .css('display', 'block')
//   .text(index)
//   .width(index + "%");
//   });

$('p').each(function(index) {
    rand = Math.floor(Math.random()*20);
    $(this)
    .fadeIn(2000)
    .css('display', 'block')
    .text(rand)
    .width(rand + "%");
  });

$('#buttondiv').click(function() {
  $('.number').each(function(index) {
      var $next = $(this).next();
      var firstnumber = parseInt($(this).text());
      var secondnumber = parseInt($next.text());
      if (firstnumber > secondnumber) {
        $next.insertBefore($(this));
      } else {
        return $(this);
      }
  })
})

  // $('div').each(function() {
  //     alert('function started');
  //     var $next = $(this).next();
  //     var firstnumber = parseInt($(this).text());
  //     var secondnumber = parseInt($next.text());
  //     if (firstnumber > secondnumber) {
  //         $(this).insertBefore($(this).next('div'));
  //     } else {
  //         $(this).insertAfter($(this).next('div'));
  //     }
  // });


// $('#buttondiv').click(function() {
//   alert($('.container').contents().find('p'));

    // .each($('p'), (function() {
    //   $(this).fadeIn(1500, (function() {
    //
    //     if (firstnumber < secondnumber) {
    //       return firstnumber;
    //     } else {
    //       $(this).fadeIn(1500, (function() {
    //       $(this).css('background-color', 'red');
    //       }));
    //     }
    //   }))
    // }))
// });

    // var secondnumber = $((this) '+ p').val();
    // if (firstnumber < secondnumber) {
    //   return firstnumber;
    // } else {
    //   secondnumber = firstnumber;
    //   firstnumber = secondnumber;
    // }
