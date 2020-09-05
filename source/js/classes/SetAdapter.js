class SetAdapter{
 construct(){
  //this.noteSet = noteSet;
  this.lastNum;
 }

 //Methods
 fetchNoteSet(expr){
  let set;
  let randomNum;

  this.getNotes()
    .then(data => {
     
     switch (expr) {
      /* Chromatic Scale */
      case 'chromatic':
       randomNum =  this.getRandomNum(data);
       UI.drawNote(data[randomNum]);
       break;
     
      /* Natural Notes */
      case 'naturals':
       set = data.filter(val => val.type == 'natural');
       randomNum = this.getRandomNum(set);
      
       UI.drawNote(set[randomNum]);
      
       break;

     /* Accidental Notes */
      case 'accidentals':
       set = data.filter(val => val.type == 'accidental');
       randomNum = this.getRandomNum(set);

       UI.drawNote(set[randomNum]);
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