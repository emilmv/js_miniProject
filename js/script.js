document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.querySelector('.timer-bar-progress');
    var carousel=document.querySelector('#carouselExampleCaptions')
    progressBar.addEventListener('animationend',function(){
       let slideIndex=1
       goToSlide(slideIndex);
       slideIndex++;
       if(slideIndex>4){
        slideIndex=1;
       }
       progressBar.css
    })



});
function goToSlide(slideIndex) {
    $('#carouselExampleCaptions').carousel(slideIndex);
}
