  const counter = document.getElementById('counter');
        const incrementbtn = document.getElementById('increment');
        const decrementbtn = document.getElementById('decrement');

        var   counterValue = 0;
       
        incrementbtn.addEventListener('click', function(){
            
         if (counterValue <= 49) {
                counterValue += 1;
                counter.innerHTML = counterValue;
            }
        });
       
        decrementbtn.addEventListener('click', function () {
               if (counterValue >= 1) {
                   counterValue -= 1;
                   counter.innerHTML = counterValue;
               } 
        });
