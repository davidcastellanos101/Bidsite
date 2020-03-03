var slideIndex = 1;
var slideId;

function setProductId(idProducto){
  slideId = idProducto;
}


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  slideIndex = n;
  showDivs(slideIndex);
}

function showDivs(n) {
  console.log(slideId)
  var i;
  var x = document.getElementsByClassName(slideId);
  var dots = document.getElementsByClassName("demo"+slideId);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }

  dots[slideIndex-1].className += " w3-white"; 
  x[slideIndex-1].style.display = "block";
}