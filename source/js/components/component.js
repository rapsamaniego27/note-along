/* Element variables */
const note = document.querySelector('#note');
const dots = document.querySelector('#dots');
const noteSet = document.querySelector('#noteSet');
const interval = document.querySelector('#interval');
const startBtn = document.querySelector('#start');

const noteController = new NoteController();

/* Load these when window is finished loading */
window.addEventListener('DOMContentLoaded', ()=> {
  UI.revealStart();
  UI.displayDots(5);

  interval.addEventListener('change', (e)=> {
   const value = e.target.value;

   UI.displayDots(value);
  });

});



startBtn.addEventListener('click', (e)=>{
 e.preventDefault();
 noteController.generate(interval);
 
});


