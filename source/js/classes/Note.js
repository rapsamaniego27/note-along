class NoteController{
 construct(){
  
 }

 //Methods
 run(interval, setValue, noteSound){
  UI.hideStart();
  UI.disableOptions(true);

  let increment= 0;
  const limit = interval.value;

  /* Displays the initial note */
  setAdapter.fetchNoteSet(setValue, 0);

  /* Displays a note for every nth seconds */
  /* Depends on what interval the user chooses */
  intervalAdapter.run(increment, limit, setValue);

 }

 logValue(element){
  const value = element.value;
  console.log(value);
 }

}