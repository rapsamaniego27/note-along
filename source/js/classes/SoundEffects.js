
const Sounds = (function(){
 /* Private Methods */
 const snare = new Tone.Player('../audio/snare-lofi01.mp3').toMaster();
 const decide = new Tone.Player('../audio/decide.mp3').toMaster();
 const cancel = new Tone.Player('../audio/cancel.mp3').toMaster();

  /* Public Methods */
  return{
   beep:function(){
    snare.start();
   },
   decide:function(){
    decide.start();
   },
   cancel: function () {
    cancel.start();
   }
  }
  
})(); 
