
const Sounds = (function(){
 /* Private Methods */
 const snare = new Tone.Player('../audio/snare-lofi01.mp3').toDestination();
 const decide = new Tone.Player('../audio/decide.mp3').toDestination();
 const cancel = new Audio('../audio/cancel.mp3');

  /* Public Methods */
  return{
   beep:function(){
    snare.start();
    snare.volume.value = -15;

   },
   decide:function(){
    decide.start();
   },
   cancel: function () {
    cancel.play();

    /* Stop sounds after this sound has ended */
    this.stopSounds();

   },
   stopSounds(){
    snare.stop();
    decide.stop();
   }
  }
  
})(); 
