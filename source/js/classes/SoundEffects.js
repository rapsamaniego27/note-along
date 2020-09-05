
const Sounds = (function(){
 /* Private Methods */
 const snare = new Audio('../audio/snare-lofi01.mp3');
 const decide = new Audio('../audio/decide.mp3');
 const cancel = new Audio('../audio/cancel.mp3');

  /* Public Methods */
  return{
   beep:function(){
    snare.play();
   },
   decide:function(){
    decide.play();
   },
   cancel: function () {
    cancel.play();
   },
  }
  
})(); 
