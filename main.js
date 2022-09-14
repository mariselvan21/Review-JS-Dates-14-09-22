var d=new Date();
console.log(d);

var birthday=new Date(1999,3,20,10,30,25,45);
console.log(birthday);

var birthday=new Date(99,3,20,10,30,25,45);
console.log(birthday);

var birthday=new Date(9,3,20,10,30,25,45);
console.log(birthday);

var birthday=new Date(1999,3,20,10,30,25,45);
console.log(birthday.toString());

var birthday=new Date(1999,3,20,10,30,25,45);
console.log(birthday.toUTCString());

var birthday=new Date(1999,3,20,10,30,25,45);
console.log(birthday.toDateString());

var birthday=new Date(1999,3,20,10,30,25,45);
console.log(birthday.toISOString());


//Javascript get date methods
var d=new Date();
console.log(d.getTime());
console.log(d.getYear());
console.log(d.getFullYear());
console.log((d.getMonth())+1);
console.log(d.getTime());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getDay());

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var wordsinday=days[d.getDay()];
console.log(wordsinday);


const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
var currentmonth=months[d.getMonth()];
console.log(currentmonth);

//Javascript set date methods

var d=new Date();
console.log(d.setFullYear(2020));
console.log(d.setFullYear(1999,3,20));
console.log(d.setFullYear(3));
