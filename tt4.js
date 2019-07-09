/**
 * Javascript Define & Call Functions
 */

 function myFunction() {
     document.write("This is a simple function.<br />");
 }
 myFunction();

 var count = 0;
 function countVowels(name) {
     for (var i = 0; i < name.length; i++) {
         if (name[i] == "a" || name[i] == "e"|| name[i] == "i" || name[i] == "o" || name[i] == "u") 
            count = count + 1;
     }
     document.write("Hello "+ name + "!!! Your name has "+ count + " vowels.<br/>");
 }
 var myName = prompt("Please enter your name");
 countVowels(myName);

 function sum(fi, se) {
     var sum = fi + se;
     return sum;
 }
 var firstNo = 22;
 var secondNo = 33;
 document.write(firstNo + " + " + secondNo + " = " + sum(firstNo, secondNo));
