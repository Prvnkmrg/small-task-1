console.log('hwllo world');
let count=0;
let bbb=Math.ceil(1+(1000-1)*Math.random());
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let number=document.getElementById("number");
   checked(number.value);
   number.value="";
})
let some=document.getElementById("some");
function checked(value) {
    if(value==bbb){
        some.style.display="block";
        // console.log("WOw,Congradulation  you got an  answer "+bbb);
         some.innerHTML=`<h3>WOw you got a answer ${bbb},You take(${count}) guesses </h3>`;
         document.getElementById("take").style.display="block";
    }else if(value>bbb) {
        some.innerHTML='<h3>Lower Number Please</h3>';
        // console.log("Lower number pls");
        some.style.display="block";

    }else{
        some.innerHTML='<h3>Higer Number Please</h3>';
        // console.log("Higher Number Please");
        some.style.display="block";
    }
    count++;
}