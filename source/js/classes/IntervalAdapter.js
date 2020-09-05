class IntervalAdapter{
 construct(){

 }

 //Methods
 run(increment, limit, setValue){

  const dotInterval = setInterval(() => {
   
   /* Checks to see if interval is greater */
   if (increment >= limit) {
    UI.unshadeDots(increment);
    increment = 0;

    
    setAdapter.fetchNoteSet(setValue);
   }

   UI.shadeDot(increment);
   increment++

  }, 1000);

  UI.bindStop(dotInterval, increment);
 }
}