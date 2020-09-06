class NoteSoundsAdapter{
 construct(note){
   this.note = note;
 }

 //Methods
 checkOptions(noteSound, note){
  const optionValue = noteSound.value;

  const dotsContainer = document.querySelector('#dots');
  
  switch (optionValue) {
   case 'off':
    /* Do nothing */

    break;
   case 'first':
    
    this.playNote(note);
    break;
   
   case 'last':
    const lastDot = dotsContainer.lastElementChild;
    this.observeDot(lastDot, note);
    break;
  
   default:
    break;
  }

 }

 observeDot(childDot, note){
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationsList, observer) => {
   // Use traditional 'for loops' for IE 11
   for (let mutation of mutationsList) {
    if (mutation.type === 'attributes') {
     

     /* Run this if something is changed on that childDot */
     if (childDot.classList.contains('dot--counted')){
      this.playNote(note);  
      observer.disconnect();
     }

    }
   }
   
  };

  const observer = new MutationObserver(callback);
  // Create an observer instance linked to the callback function

  // Start observing the target node for configured mutations
  observer.observe(childDot, config);

  /* Stop Button */
  const stopBtn = document.querySelector('#stop');
  
  stopBtn.addEventListener('click', (e) => {
   e.preventDefault();
   observer.disconnect();
   console.log('stopped from observer');
  });

 }


 playNote(note){
  
  note = note ? note.name : '';

  const noteSound = new Tone.Synth().toDestination();
  noteSound.triggerAttackRelease(`${note}4`, "8n");
 }


}