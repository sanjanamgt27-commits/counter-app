const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const para = document.querySelector("p");
const resetbtn =document.querySelector(".resetbtn");

let count=0;


function color(){
    if(count === 0){
        para.style.color ="#ffffff";
    }else if(count < 0){
        para.style.color ="#3e0202";

    }else if(count > 0){
        para.style.color ="#09620a";

    }
}

btn1.addEventListener("click",()=>{
    count-=1;
    para.innerText=count;
     color();

  
});

btn2.addEventListener("click",()=>{
    count+=1;
    para.innerText = count;
    color();
    
  
});

resetbtn.addEventListener("click",()=>{
    count=0;
    para.innerText=count;
    para.style.color="#ffffff";
});