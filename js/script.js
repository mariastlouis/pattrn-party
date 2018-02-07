
function setTab () {
  let tabId = $(this).children().attr('href');
  let liId = $(this).attr('id')
  let tabLink = $(this).children();
  $('li').removeClass( 'active' )
  $('div').removeClass('active')
  $('a').removeClass('active')
  $(this).addClass('active')
  $(tabId).addClass('active')
  $(tabLink).addClass('active')
  $('.plus-minus').text('+')
  $(`.plus-minus-${liId}`).text('-')
}


$('.tab-head').on('click', setTab)