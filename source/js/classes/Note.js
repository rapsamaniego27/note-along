class NoteController{
 construct(){
  
 }

 //Methods
 generate(interval, set){
  UI.hideStart();
  UI.disableOptions(true);
  let increment= 0;
  const limit = interval.value;

  /* Displays the initial note */
  const setValue = noteSet.options[noteSet.selectedIndex].value; 
  setAdapter.fetchNoteSet(setValue);

  /* Displays a note for every nth seconds */
  /* Depends on what interval the user chooses */
  intervalAdapter.run(increment, limit, setValue);

 }

 logValue(element){
  const value = element.value;
  console.log(value);
 }



}