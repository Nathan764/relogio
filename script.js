const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milesimos = document.getElementById('milesimos');
const dias = document.getElementById('dias');
const calendario = document.getElementById('mes');
const ano = document.getElementById('ano');


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let mill = dateToday.getMilliseconds();
    let day = dateToday.getDate();
    let calendar = dateToday.getMonth()+1;
    let year = dateToday.getFullYear();


    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;
    if (mill < 10) mill = '0' + mill;
    if (day < 10) day = '0' + day;
    if (calendar < 10) calendar = '0' + calendar;
    if (year < 10) year = '0' + year;


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milesimos.textContent = mill;
    dias.textContent = day;
    mes.textContent = calendar;
    ano.textContent = year;


})