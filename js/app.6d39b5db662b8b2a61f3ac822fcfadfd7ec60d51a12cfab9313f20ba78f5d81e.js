const SCROLLER_HEIGHT = document.querySelector('.scrollbar .handle').clientHeight;

// better design the site use window scrollbar
// document.addEventListener('scroll', function(e){
document.addEventListener('scroll', function(e){
  let scroll_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled_percent = document.documentElement.scrollTop/scroll_height;

  let scrollbar_height = document.querySelector('.scrollbar').clientHeight;

  let scroll_padding = document.querySelector('.scrollbar .padding:first-child');
  let end_scroll_padding = document.querySelector('.scrollbar .padding:last-child');
  const before = (scrollbar_height - SCROLLER_HEIGHT) * scrolled_percent;
  const after = scrollbar_height - before - SCROLLER_HEIGHT;
  
  scroll_padding.style.height = before + 'px';
  end_scroll_padding.style.height = after + 'px';
}, true);
