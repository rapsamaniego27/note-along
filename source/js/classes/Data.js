class Data{
 construct(){
  
 }

 //Methods
 getNotes(){

  fetch('../data/notes.json')
   .then(response => response.json())
   .then(json => console.log(json))
   .catch(err => console.log(err));

 }


}