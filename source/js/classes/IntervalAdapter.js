class IntervalAdapter{
 construct(){

 }

 //Methods
 run(increment, limit){
  const dotInterval = setInterval(() => {
   /* Checks to see if interval is greater */
   if (increment >= limit) {
    UI.unshadeDots(increment);
    increment = 0;
   }

   UI.shadeDot(increment);
   increment++

  }, 1000);

  UI.bindStop(dotInterval, increment);
 }
}