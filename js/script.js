
function setTab () {
  let tabId = $(this).children().attr('href')
  $('li').removeClass( 'active' )
  $('div').removeClass('active')
  $(this).addClass('active')
  $(tabId).addClass('active')
}


$('.tab-head').on('click', setTab)