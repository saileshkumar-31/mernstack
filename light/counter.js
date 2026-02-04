const onBtnn=document.getElementById("lighton");
const offImg1=document.getElementById("offImg1");
const onImg1=document.getElementById("onImg1");
const offImg2=document.getElementById("offImg2");
const onImg2=document.getElementById("onImg2");
const backbtn=document.getElementById("back1");

onBtnn.addEventListener("click",function(){
    onImg1.classList.remove("hidden");
    offImg1.classList.add("hidden");
    onImg2.classList.remove("hidden");
    offImg2.classList.add("hidden");
    back1.classList.add("bg-white");
})


const offBtn=document.getElementById("lightoff");
offBtn.addEventListener("click",function(){
    onImg1.classList.add("hidden");
    offImg1.classList.remove("hidden");
    onImg2.classList.add("hidden");
    offImg2.classList.remove("hidden");
    back1.classList.remove("bg-white");
    back1.classList.add("bg-black");
})

