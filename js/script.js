
function setTab () {
  let tabId = ($(this).attr('href'))
  $('li').removeClass( 'active' )
  $('div').removeClass('active')
  $(this).parent('li').addClass('active')
  $(tabId).addClass('active')
}


$('.tab-link').on('click', setTab)