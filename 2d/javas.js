//cursor follow cursor
let cursor = document.getElementById("cube");


function Touch(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
};

const move = (e) =>{
    try{
        var x = !Touch() ? e.pageX : e.touches[0].pageX;
        var y = !Touch() ? e.pageY : e.touches[0].pageY;
    }
    catch(e){}

    cursor.style.left = x - 310 + "px";
    cursor.style.top = y - 85 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
    move(e);
})
//For touch
document.addEventListener("touchmove", (e) => {
    move(e);
})


//change image 
function changeImage(fileName){
    let img = document.querySelector("#cube");
    img.setAttribute("src", fileName);
}

//popup register form
function openForm() {
    document.getElementById("register").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("register").style.display = "none";
  }