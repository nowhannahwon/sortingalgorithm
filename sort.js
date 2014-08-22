
$('p')
  .each(function(index) {
  $(this)
  .fadeIn(2000)
  .css('display', 'block')
  .text(index)
  });



// $.each(index, $(".sortme")) function() {
//   $this.attr('id=' + index);
// });


// function mergeSort(left, right) {
//   var sortList = [];
//   // assign the element of the sublists to 'sortList' variable until there is no element to merge.
//   while (left.length > 0 || right.length > 0) {
//     if ((left.length > 0) && (right.length > 0)) {
//      // compare the first two element, which is the small one, of each two sublists.
//       var result = []
//       if (left[0] <= right[0]) {
//         sortList.append(left[0]);
//         result.push(left.shift());
//       } else {
//         sortList.append(right[0]);
//         result.push(right.shift());
//         }
//     } else if (left.length > 0) {
//         sortList.append(left[0]);
//         result.push(left.shift());
//     } else if (right.length > 0) {
//         sortList.append(right[0]);
//         result.push(right.shift());
//       }
//   return sortList
// }}
