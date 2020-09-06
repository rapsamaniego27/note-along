class NoteSoundsAdapter{
 construct(note){
   this.note = note;
 }

 //Methods
 checkOptions(noteSound){
  const optionValue = noteSound.value;

  const dotsContainer = document.querySelector('#dots');
  
  switch (optionValue) {
   case 'off':

    break;
   case 'first':
    const firstDot = dotsContainer.firstElementChild;
    this.observeDot(firstDot);
    break;
   
   case 'last':
    const lastDot = dotsContainer.lastElementChild;
    this.observeDot(lastDot);
    break;
  
   default:
    break;
  }

 }

 observeDot(childDot){
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationsList, observer) => {
   // Use traditional 'for loops' for IE 11
   for (let mutation of mutationsList) {
    if (mutation.type === 'attributes') {
     
     const dotsContainer = childDot.parentElement;

     /* Run this if something is changed on that childDot */
     if (childDot.classList.contains('dot--counted')){
      this.playNote();  
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

 
 observeParentDot(dotsContainer){
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationsList, observer) => {
   // Use traditional 'for loops' for IE 11
   for (let mutation of mutationsList) {
    if (mutation.type === 'attributes') {
     
     if (dotsContainer.classList.contains('dot--active')) {
      console.log('true');
     } 

    }
   }

  };

  const observer = new MutationObserver(callback);
  // Create an observer instance linked to the callback function

  // Start observing the target node for configured mutations
  observer.observe(dotsContainer, config);
 }

 playNote(){
  const noteSound = new Tone.Synth().toDestination();
  noteSound.triggerAttackRelease("C4", "8n");
 }


}