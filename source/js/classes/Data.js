class Data{
 construct(){

 }

 //Methods

 /* Converts notes to json */
async getNotes(){

   let api = '../data/notes.json';
   let response = await fetch(api);
   let json = await response.json();

   return json;
 }

}

