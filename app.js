
'use strict';

var userName=prompt("Enter Your Name Please");





var gender=prompt("Enter Your Gender (male or female)")






var age=prompt("Enter Your Age Please")
if(age<=0){
    alert("This Is Not Real Age")
}
var nickName;
var infArray=[nickName,userName,age,gender]

var answer=confirm("Do You Want To Skip Welcoming Message?")

if(gender === "male"){
    nickName="Mr";
    console.log(gender)
}
else if(gender.toLowerCase==="female")
{
    nickName="Ms";

}    
else{
    nickName="  "
}

if (answer==false){
    
    alert("Welcome :"+nickName+infArray)
  
}
var time=prompt("Do You Think Time is Important?")
var invest=prompt("Do You Need to Invet Your Time?")
var join=prompt("Do You Need to Join Us On ToDo?")

if (time===null||invest===null||join==null){
alert("Invalid Answer/Answers");
}
var queArray=[time,invest,join]
for (var k=0;k<3;k++){
console.log(queArray)
}