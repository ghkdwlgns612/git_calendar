let year = 2018, month = 4, d= new Date(year,month,1);
let date = d.getDate();
let day = d.getDay();
let d_length = 32 - new Date(year,month,32).getDate();


let caption_year = document.querySelector(".year");
let caption_month = document.querySelector(".month");
let start_day = document.querySelectorAll("tr td");


for(let i=day;i<day+d_length;i++){
    start_day[i].innerHTML=date;
    date++;
}

caption_year.innerHTML = year;
caption_month.innerHTML = month + 1;