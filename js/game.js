const kostka = document.getElementById('cube')
const cudlik = document.getElementById('game');;
const statistika = document.getElementById('result');
let hody = [];

document.getElementById('game').addEventListener('click',
    function(){
        cudlik.hidden=true;
        hod();
        audio();
        console.log(hody);
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function audio(){
    var zvuk = document.getElementById('dice');
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
    },3000);
}


function hod() {
    var obrazek = ["img/kostka1.png","img/kostka2.png","img/kostka3.png","img/kostka4.png","img/kostka5.png","img/kostka6.png"];
    let Interval1 = window.setInterval(function(){
        document.getElementById('cube').src = obrazek[Math.floor(Math.random()*obrazek.length)];
    },100)
    window.setTimeout(function(){
        window.clearInterval(Interval1);
    },3000)
   
  
    window.setTimeout(function(){
        cudlik.hidden = false;
        var h = Math.ceil(Math.random() * 6);
        hody.push(h);
        kostka.src='img/kostka' + h + '.png';
       statistika.innerHTML = '<p></p><p>Hod: ' + h + '</p>';
       statistika.innerHTML += 
            '<p>Počet hodů: ' + hody.length + '</p>';
       statistika.innerHTML += 
            '<p>Součet hodů: ' + suma(hody) + '</p>';
       statistika.innerHTML += 
            '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
       statistika.innerHTML += 
            '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
       statistika.innerHTML += 
            '<p>Nejnižší hod: ' + minimum(hody) + '</p>';
        return h;
    },3000)
}
    