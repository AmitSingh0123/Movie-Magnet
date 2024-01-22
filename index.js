
onLoad();
function onLoad(){
  setInterval(updateImgs, 4000); 
}
function updateImgs(){
  let images = document.querySelectorAll('.image');
  document.querySelector('.slider').appendChild(images[0])
}
