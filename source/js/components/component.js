/* Element variables */
const noteElement = document.querySelector('#note');
const dots = document.querySelector('#dots');
const noteSet = document.querySelector('#noteSet');
const interval = document.querySelector('#interval');
const startBtn = document.querySelector('#start');
const noteSound = document.querySelector('#noteSound');

/* Instantiating Controllers and Adapters */
const noteController = new NoteController();
const intervalAdapter = new IntervalAdapter();
const setAdapter = new SetAdapter();
const noteSoundsAdapter = new NoteSoundsAdapter();

/* Load these when window is finished loading */
window.addEventListener('DOMContentLoaded', ()=> {
  UI.revealStart();
  
  /* Populate Data */
  UI.populateNoteSets(noteSet);
  UI.populateIntervals(interval);

  /* Add dots on change of interval option */
  interval.addEventListener('change', (e)=> {
   const value = e.target.value;

   UI.displayDots(value);
  });

});



startBtn.addEventListener('click', (e)=>{
 e.preventDefault();
 Sounds.decide();
 const nextElement = e.target.nextElementSibling;
 UI.freezeDelay(nextElement);
 UI.activateDots(dots);

 const setValue = noteSet.options[noteSet.selectedIndex].value; 


 noteController.run(interval, setValue, noteSound);
 
});


