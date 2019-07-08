window.addEventListener('load', ()=> {
const sounds = document.querySelectorAll('.mp3');
const pads = document.querySelectorAll(".pads div");

console,log(mp3);

pads.forEach(pad, index) =>{
    pad.addEventListener('click', function(){
       mp3[index].play();
    })
}
}); 