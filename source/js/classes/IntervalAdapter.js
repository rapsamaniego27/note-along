class IntervalAdapter{
 construct(){

 }

 //Methods
 run(increment, limit, setValue){
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
    
    console.log(notesShown);
    UI.unshadeDots(increment);
    increment = 0;
   }

   Sounds.beep();
   UI.shadeDot(increment);
   increment++
   
  }, 1000);
  
 
  /* Binds a clearInterval function to the UI */
  UI.bindStop(dotInterval, increment, notesShown);
 }
}