// *****chap 31 - 34*********

//*******TASK  NO 1******* */
 
// var a = new Date();
// document.write(a)



//*******TASK  NO 2******* */

// var arr = ["january" , "February" , "March" , "April" ,"May" , "June","July","August" ,"September","october","november","december"]
// var a = new Date().getMonth();
// alert( "The current month is " + arr[a]);



//*******TASK  NO 3******* */

// var arr =["sun","mon","tue","wed","thu","fri","sat"] ;
// var b = new Date().getDay();
// alert("The current day is [ " + arr[b] + " ]")



//*******TASK  NO 4******* */

// var a = new Date().getDay();
// if(a === 0 || a=== 6){
//     alert("Its Fun Day")
// }



//*******TASK  NO 5******* */

// var a = new Date().getDate();
// if(a === 1 || a === 2 || a === 3 || a === 4 || a === 5 || a === 6 || a === 7 || a === 8 || a === 9 || a === 10 || a === 11 || a === 12 || a === 13 || a === 14 || a === 15  ){
//     alert("First fifteen days of month")
// }
// else{
//     alert("Last fifteen days of month")
// }



//*******TASK  NO 6******* */

// var a = new Date();
// var b = new Date().getMinutes();
// var c = new Date().getTime();
// document.write("Current Date " + "[ "+a + " ]"+"<br>");
// document.write("Elapsed miliseconds form january 1,1970  " + "[ "+ c +" ]"+"<br>");
// document.write("Elapsed minutes form january 1,1970  " + "[ "+ b + " ]");




//*******TASK  NO 7******* */

// var a = new Date();
// var b = a.toLocaleTimeString();
// var c = b.slice(9,11)
// alert("its "  + c)




//*******TASK  NO 8******* */

// var LaterDate = new Date("dec 31 2015");
// document.write("Later Date : " + LaterDate)



//*******TASK  NO 9******* */

// var date = new Date().getTime() - new Date("june 18 2015").getTime();
// var b = date / (1000 *3600 * 24)
// document.write(Math .floor(b) + " Days passed since 1st Ramazan,2015")



//*******TASK  NO 10******* */


// var d = new Date("5 dec 2015");
// var a = new Date("5 dec 2015").getTime() 
// var c =  new Date("1 jan 2015").getTime() ;
// var b = a / (1000 * 60 * 24);
// document.write("On the refrence date "+ d+ " [  " + b  + "  ]" + " seconds had passed since begning of 2015")





//*******TASK  NO 11******* */

// var date = new Date();
// var date1= new Date(date -1 );
// document.write("Current Date : " + date + "<br>");
// document.write(" 1 hour ago , it was " + date1)




//*******TASK  NO 12******* */

// var a = new Date();
// var b = new Date ("12 jul 1922");
// document.write("current date"+a + "<br> ");
// document.write("100 years ago it was "+b);




//*******TASK  NO 13******* */

// var a = +prompt("Enter your age");
// var b = new Date().getFullYear();
// var c = b - a ;
// document.write("your birth year is " +c)




// //*******TASK  NO 14******* */


// var a = prompt("Enter your name");
// var b = prompt("enter a month");
// var c = +prompt("enter the number of units");
// var d = 16;
// var f = 350 ;
// document.write("<h1>"+ "K-Electric Bill" + "</h1>" + "<br>" + "Customer Name :  "+ a + "<br>" +"Month  : "+ b + "<br>" +"Number of units  : "+ c + "<br>" +"Chatges per unit  : " + d + "<br>" +"Net amount payable(within due date) : " + (c * d) + "<br>" + "late payment surcharge  : "+ f + "<br>" + "Gross amount payable(after due date ) : " + (c*d+f))