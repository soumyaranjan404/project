const body =  document.querySelector("body");
       const clas =  document.querySelectorAll('.colr');
       clas.forEach((box)=> {
        box.addEventListener('click',(you )=>{
            if(you.target.id=="grey")
            {
                body.style.backgroundColor='grey'
            }
            if(you.target.innerhtml=="B")
            {
                body.style.backgroundColor='red'
            }if(you.target.innerhtml=="C")
            {
                body.style.backgroundColor='blue'
            }if(you.target.innerhtml=="D")
            {
                body.style.backgroundColor='green'
            }

        })
       });