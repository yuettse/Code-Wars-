function timeForMilkAndCookies(milkday){
  if(milkday == 20131124) {
    return true;
}
  return false;
}

function Date(year1, month1, day1) {
  return String(year1) + String(month1) + String(day1);
}

 
var year = 2013;
var month = 11;
var day = 24;
console.log(timeForMilkAndCookies(Date(year, month, day)));

