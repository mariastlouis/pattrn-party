
function setTab () {
  let tabId = $(this).children().attr('href');
  let tabLink = $(this).children();
  $('li').removeClass( 'active' )
  $('div').removeClass('active')
  $('a').removeClass('active')
  $(this).addClass('active')
  $(tabId).addClass('active')
  $(tabLink).addClass('active')
}


$('.tab-head').on('click', setTab)