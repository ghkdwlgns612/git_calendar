
let prev =  document.getElementById("prev");
let next = document.getElementById("next");
let year = new Date().getFullYear();
let month = new Date().getMonth()+1;

calendar(year,month);

prev.onclick = function(){
    calendar(year,--month);
};

next.onclick = function(){
    calendar(year,++month);
};



function calendar(new_year,new_month){
let d= new Date(new_year,new_month-1,1);
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let day = d.getDay();
let d_length = 32 - new Date(new_year,new_month-1,32).getDate();


let caption_year = document.querySelector(".year");
let caption_month = document.querySelector(".month");
let start_day = document.querySelectorAll("tr td");


for(let j=0;j<start_day.length;j++){
    start_day[j].innerHTML = "&nbsp;";
}

for(let i=day;i<day+d_length;i++){
    start_day[i].innerHTML=date;
    date++;
}

caption_year.innerHTML = year;
caption_month.innerHTML = month + 1;
}

