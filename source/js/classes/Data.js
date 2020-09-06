class Data{
 construct(){
  
 }

 /* Converts notes to json */
async getNotes(){

   let api = '../data/notes.json';
   let response = await fetch(api);
   let json = await response.json();

   return json;
 }

 async getNoteSets(){
   let api = '../data/sets.json';
   let response = await fetch(api);
   let json = await response.json();

   return json;
 }

  async getIntervals() {
    let api = '../data/intervals.json';
    let response = await fetch(api);
    let json = await response.json();

    return json;
  }

}

