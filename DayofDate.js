let date=document.getElementById("date");
 
  
let moonth=document.getElementById("month");
  
let yeear=document.getElementById("year");

let sddbtn=document.getElementById("addbtn");
sddbtn.addEventListener("click",function(e){
   
    let inder=document.querySelector(".dayt");
   
    let daay=new Date(moonth.value+" "+date.value+" "+yeear.value).getDay();
    
    let p=false,q=false,r=false;
    if(date.value>0 && date.value<=31){
        p=true;
    }
    if(moonth.value>0 && moonth.value<=12){
        q=true;
    }
    if(yeear.value>0){
        r=true;
    }
    let onemore=document.getElementById("onemore");
    if(p && (q&& r)){
        if(daay==0){
            inder.innerHTML=" <h3>Sunday!</h3>";
            inder.style.display="block";
            }else if(daay==1){
                inder.innerHTML=" <h3>Monday!</h3>";
                inder.style.display="block";
            }else if(daay==2){
                inder.innerHTML=" <h3>Tuesday!</h3>";
                inder.style.display="block";
            }else if(daay==3){
                inder.innerHTML=" <h3>Wednesday!</h3>";
                inder.style.display="block";
            }else if(daay==4){
                inder.innerHTML=" <h3>Thursday!</h3>";
                inder.style.display="block";
            }else if(daay==5){
                inder.innerHTML=" <h3>Friday!</h3>";
                inder.style.display="block";
            }else if(daay==6){
                inder.innerHTML=" <h3>Saturday!</h3>";
                inder.style.display="block";
            }
        onemore.style.display="block";
    }else{
        inder.innerHTML=" <p>Please enter correct date,mont,year</p>";
        inder.style.display="block";
    }
     
   
    date.value="";
    moonth.value="";
    yeear.value="";

})