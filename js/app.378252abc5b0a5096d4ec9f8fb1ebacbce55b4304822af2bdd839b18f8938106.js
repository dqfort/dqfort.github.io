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

let scroller = document.querySelector('.scrollbar .scroller');
let _dragging = false;
scroller.addEventListener("mousedown", function(ev) {_dragging = true});
document.addEventListener("mouseup", function(ev) { _dragging= false});

document.addEventListener("mousemove", function(ev) {
  if (!_dragging) {return false};
  let scroll_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let area = document.querySelector(".scrollarea");
  let current_y = ev.clientY - document.querySelector(".scrollarea").getBoundingClientRect().top;

  if (current_y < 0) { current_y = 0; }
  else if (current_y > area.clientHeight ) { current_y = area.clientHeight; }
  let scroll_y = current_y/area.clientHeight * scroll_height;

  window.scrollTo({ top: scroll_y});
})
