const UI = (function(){
 /* Private Methods */
  const selectors = {
   start: '#start',
   stop: '#stop'
  }
  
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
    console.log(number);
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
      clearInterval(interval);
      this.unshadeDots(numDots);
      this.revealStart();
      this.disableOptions(false);
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

   }
  
   

  }
  
})(); 