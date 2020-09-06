class IntervalAdapter{
 construct(){

 }

 //Methods
 run(increment, limit, setValue){
  /* Used for Circle of fifths to track array count */
  let notesShown = 1;

  const dotInterval = setInterval(() => {

   /* Checks to see if interval is greater */
   if (increment >= limit) {
    /* Fetches a noteset and automatically runs it */
    setAdapter.fetchNoteSet(setValue, notesShown);
    
    
    /* Specified for Circle of Fifths */
    if(notesShown >= 11){
      notesShown = 0
    }else{
     notesShown++;
    }
    
    UI.unshadeDots(increment);
    increment = 0;
   }

   /* Defaults when interval is running */
   Sounds.beep();
   UI.shadeDot(increment);
   increment++
   
  }, 1000);
  
 
  /* Binds a clearInterval function to the UI */
  UI.bindStop(dotInterval, increment, notesShown);
 }
}