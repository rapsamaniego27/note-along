class SetAdapter{
 construct(){
  this.lastNum;
  this.count;
 }

 //Methods
 fetchNoteSet(setValue, increment){
  let set = [];
  let randomNum;

  this.getNotes()
    .then(data => {
     
     switch (setValue) {
      /* Chromatic Scale */
      case 'chromatic':
       randomNum =  this.getRandomNum(data);

       /* Draws the note and add sounds */
       UI.drawNote(data[randomNum]);
       noteSoundsAdapter.checkOptions(noteSound, data[randomNum]);
       break;
      
      /* Natural Notes */
      case 'naturals':
       set = data.filter(val => val.type == 'natural');
       randomNum = this.getRandomNum(set);

       /* Draws the note and add sounds */
       UI.drawNote(set[randomNum]);
       noteSoundsAdapter.checkOptions(noteSound, set[randomNum]);
    
       break;

     /* Accidental Notes */
      case 'accidentals':
       set = data.filter(val => val.type == 'accidental');
       randomNum = this.getRandomNum(set);

       /* Draws the note and add sounds */
       UI.drawNote(set[randomNum]);
       noteSoundsAdapter.checkOptions(noteSound, set[randomNum]);
       break;

      /* Circle of Fifths */
      case 'coc':
       const rotation = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];
       
       /* Gets all the notes in order of circle of fifths */
       rotation.forEach(position => {
        set.push(data[position]);
       });

       /* Draws the note and add sounds */
       UI.drawNote(set[increment]);
       noteSoundsAdapter.checkOptions(noteSound, set[increment]);
      
       break;
      default:
       console.log('Sorry we cant find that expression');
     }
    

    })
    .catch(err => console.log(err)); 

  
 }

 /* Passes a Note set and gets a random number from it */
 getRandomNum(data){
  const length = data.length;
  let randomNum = Math.floor(length * Math.random());  

  /* Condition exists to prevent repeating of numbers  */
  if (randomNum != this.lastNum){
   this.lastNum = randomNum;
  }else{
   randomNum = Math.floor(length * Math.random()); 
  }
  
  return randomNum;
 }

 async getNotes() {

  let api = '../data/notes.json';
  let response = await fetch(api);
  let json = await response.json();

  return json;
 }


}