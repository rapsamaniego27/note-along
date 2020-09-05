/* Element variables */
const noteElement = document.querySelector('#note');
const dots = document.querySelector('#dots');
const noteSet = document.querySelector('#noteSet');
const interval = document.querySelector('#interval');
const startBtn = document.querySelector('#start');

/* Instantiating Controllers and Adapters */
const noteController = new NoteController();
const intervalAdapter = new IntervalAdapter();
const setAdapter = new SetAdapter();

/* Load these when window is finished loading */
window.addEventListener('DOMContentLoaded', ()=> {
  UI.revealStart();
  const intervalValue = parseInt(interval.options[0].value);

  UI.displayDots(intervalValue);

  interval.addEventListener('change', (e)=> {
   const value = e.target.value;

   UI.displayDots(value);
  });

});



startBtn.addEventListener('click', (e)=>{
 e.preventDefault();
 Sounds.decide();
 noteController.generate(interval);
 
});


