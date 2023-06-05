let cnt = 0;
show(cnt);

function plusSlides(n) {
  show(cnt += n);
}

function currentSlide(n) {
  show(cnt = n);
}

function show(n) {
  let slide = document.getElementsByClassName("slide");
  let dot = document.getElementsByClassName("dot");
  if (n > slide.length) {cnt = 1}    
  if (n < 1) {cnt = slide.length}
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[cnt-1].style.display = "block";  
  dot[cnt-1].className += " active";
}