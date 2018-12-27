const codes=[38,38,40,40,37,39,37,39,66,65];
function init(){
  let done=0;
  let nd=document.querySelector('body');
  nd.addEventListener('keydown',function(e){ 
    
    let k=e.which;
    console.log(k);
    if(k===codes[done]){
      
      done++;
      console.log(done);
    
    if(done===codes.length){
      alert('Congrats!');
      done=0;
    } 
      
    }
    else {
      done=0;
    }
  });

}

  
