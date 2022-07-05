
'use strict';

var userName=prompt("Enter Your Name Please");

//prompt(userName);


var x="Male"||"Female"
var gender=prompt("Enter Your Gender (Male or Female)")

if(gender=="Male"||gender=="Female"){
console.log("OK")
}

else
{
    
for(var i=0;i<15;i++){
    
alert("Please Write Either Male or Female(Case Sensitive)")
prompt("Enter Your Gender (Male or Female)")
if(gender=="Male"||gender=="Female"){
    break;
    }
       
}
    
}
var age=prompt("Enter Your Age Please")
if(age<=0){
    alert("This Is Not Real Age")
}
var nickname
var infArray=[nickname,userName,age,gender]

var answer=confirm("Do You Want To Skip Welcoming Message?")

if (answer==false){
    if(gender=="Male"){
        nickname="Mr"
    }
    else{
        nickname="Ms"
    }    
    
    alert("Welcome "+infArray)
    //It is written before that the gender must be only male or female!

}
var time=confirm("Do You Think Time is Important?")
var invest=confirm("Do You Need to Invet You Time?")
var join=confirm("Do You Need to Join Us On ToDo?")
//These are yes/no question, so there is no an input!
if (userName==null||age==null||gender==null){
alert("Invalid Answer/Answers")
}
var queArray=[time,invest,join]
for (var k=0;k<3;k++){
console.log(queArray)
}