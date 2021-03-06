const UI = (function(){
 /* Private Methods */
  const selectors = {
   start: '#start',
   stop: '#stop'
  }

  const data = new Data();
  
  /* Public Methods */
  return{
   hideStart:function(){
    document.querySelector(selectors.start).style.display = 'none';
    document.querySelector(selectors.stop).style.display = 'block';
   },
   revealStart:function(){
    document.querySelector(selectors.start).style.display = 'block';

    document.querySelector(selectors.stop).style.display = 'none';
   },
   displayDots:function(interval){
      
      const ul = document.querySelector('#dots');
      let dots = '';

 
       Array(parseInt(interval)).fill().map((_,i) => {
        //Create li element
        const li = `
       <li class="dot">&nbsp;</li>
      `;

        dots += `${li}`;
       });

      
       ul.innerHTML = `${dots}`;
       
      
   },
   shadeDot:function(number){
    const dots = document.querySelectorAll('.dot');
   /*  console.log(number); */
    //console.log(number);
    dots[number].classList.add('dot--counted');
   },
   unshadeDots:function(){
    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => {
     dot.classList.remove('dot--counted');
    });
   },
   bindStop:function(interval, numDots){
    const stopBtn = document.querySelector(selectors.stop);

    stopBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      const previousElement = e.target.previousElementSibling;

      Sounds.cancel();
      /* Resets everything interval is cleared or user has clicked Stop */
      clearInterval(interval);

      this.deactivateDots(dots);
      this.drawNote();
      this.unshadeDots(numDots);
      this.revealStart();
      this.disableOptions(false);
      this.freezeDelay(previousElement);
      

    });
   },
   disableOptions:function(condition){
    const options = document.querySelectorAll('select');

    /* A true or false value is passed in this function */
    options.forEach(option => {
     if(condition == true){
      option.setAttribute("disabled", "");
     }else{
      option.removeAttribute("disabled");
     }
    });

   },
   drawNote:function(note){
     /* Returns 2 dashes if note is empty */
    if(note)
      return noteElement.innerHTML = `${note.name}`;
      return noteElement.innerHTML = '--';
      
   },
   freezeDelay:function(element){
     /* Freezes for 1 seconds then removes the freeze class 
     to prevent users from spamming the clicks */
     element.classList.add('freeze');
     setTimeout(() => {
       element.classList.remove('freeze');
     }, 500);
   },
   populateNoteSets:function(noteSetElement){
     let html;
     /* Gets the Note sets from the Data Object */
     data.getNoteSets()
         .then(noteSets => {

           noteSets.forEach(set => {
             html += `
              <option value="${set.name}">${set.label}</option>
             `
           });

           /* put inside this element */
           noteSetElement.innerHTML = html;

         })
         .catch(err => console.log(err));
   },
  populateIntervals: function (intervalsElement) {
      let html;

  /* Gets the Intervals from the Data Object */
      data.getIntervals()
        .then(intervals => {
          intervals.forEach(interval => {
            html += `
              <option value="${interval.value}">${interval.label}</option>
             `
          });
          /* put inside this element */
          intervalsElement.innerHTML = html;

        })
        .then(() => {
          const intervalValue = parseInt(intervalsElement.options[0].value);
          this.displayDots(intervalValue);
        })
        .catch(err => console.log(err));
    },
    activateDots: function(element){
      element.classList.add('dot--active');
    },
    deactivateDots: function (element) {
      element.classList.remove('dot--active');
    }
  
  }
  
})(); 

