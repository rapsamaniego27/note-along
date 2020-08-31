class NoteController{
 construct(){
  
 }

 //Methods
 generate(interval){
  UI.hideStart();
  UI.disableOptions(true);
  let increment= 0;
  const limit = interval.value;
  const intervalAdapter = new IntervalAdapter();

  intervalAdapter.run(increment, limit);

 }

 logValue(element){
  const value = element.value;
  console.log(value);
 }



}