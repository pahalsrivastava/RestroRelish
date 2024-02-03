var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000);

document.getElementById("mybtn").addEventListener("click",function(){
    var link="https://www.google.com/maps/place/Khmer+kitchen/@12.9065383,77.5840411,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae158d9a0f4bcd:0x31c45809126adc09!8m2!3d12.9065383!4d77.586616!16s%2Fg%2F11h8jfx4w_?entry=ttu";
    window.open(link,"_blank");
});