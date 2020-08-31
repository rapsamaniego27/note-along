class NoteController{
 construct(name){
  this.name = name;
 }

 //Methods
 generate(interval){
  UI.hideStart();
  let increment= 0;
  const limit = interval.value;

  const dotInterval = setInterval(() => {
   /* Checks to see if interval is greater */
   if (increment >= limit) {
    UI.unshadeDots(increment);
    increment = 0;
   }

   UI.shadeDot(increment);
   increment++

  }, 1000);

  UI.bindStop(dotInterval);

 }

 logValue(element){
  const value = element.value;
  console.log(value);
 }



}