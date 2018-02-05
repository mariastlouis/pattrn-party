
$('.tab-link a').on('click', (event) => {
  let target = event.target.href
  console.log(target)
  
})



// jQuery(document).ready(function() {
// jQuery('.tab-link a').on('click', function(e)  {
// var currentAttrValue = jQuery(this).attr('href');
// console.log(currentAttrValue)
// jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
// // Change/remove current tab to active
// jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
// e.preventDefault();
// });
// });


  // $('.tab-link').removeClass('active');
  // $('.tab-content').removeClass('active');





  
  // $('ul.accordion-tabs li').click(function(){
  //   var tab_id = $(this).attr('data-tab');

  //   $('ul.accordion-tabs li').removeClass('active');
  //   $('.tab-content').removeClass('active');

  //   $(this).addClass('active');
  //   $("#"+tab_id).addClass('active');
  // })

