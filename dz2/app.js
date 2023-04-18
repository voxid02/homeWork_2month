const block = document.getElementById("small-block");
let distance = 0;

function moveBox() {
  distance += 10;
  block.style.left = distance + "px";
  if (distance < 425) {
    setTimeout(moveBox, 100);
  }else{
    distance=distance-425;
    setTimeout(moveBox, 100);
  }
}
moveBox();




let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let start = document.querySelector(".start")
const result = document.querySelector(".result")
let countminute = ""
let countsecond = ""
let show = 0
let span = document.createElement('span')

setInterval(() => {
    if(countsecond<=58){
        countsecond++
        second.innerHTML=countsecond}
    else if(countminute>=4 && countminute<=4){
        second.innerHTML="0"
        countminute++
        minute.innerHTML=countminute
        span.innerHTML=`время вышло`
        result.append(span)

        
    }else if(countsecond>=1 && countminute<=4){
        countminute++
        minute.innerHTML=countminute
        countsecond = ''
        if(show<=4){
            show++
            span.innerHTML=`прошла ${show} минута`
            result.append(span)
        }
    }
},1000)