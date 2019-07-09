var students = ["John", "Ann", "Kevin", "Aaron", "Edwin", "Elizabeth"];
var students1 = new Array("John", "Ann", "Kevin");
var students2 = new Array();
students2[0] = "John";
students2[1] = "Ann";
students2[3] = "Kevin";

/**
 * JavaScript Array Methods
 * 1. length
 * if you want to know the number of elements in an array, you can use the length property
 * 2. prototype
 * if you want to add new properties and methods, you can use the prototype property
 * 3. reverse
 * You ccan reserve the order of items in an array using a reverse method.
 * 4. sort
 * You can sort the item in an array using sort method
 * 5. pop
 * You can remove the last item of an array using pop method
 * 6. shift
 * You can remove the first item of an array using pop method
 * 7. push
 * You can add a value as the last item of the array
 */

 Array.prototype.displayItems = function() {
     for (i = 0; i < this.length; i++) {
         document.write(this[i] + "<br/>");
     }
 }

 document.write("students array<br/>");
 students.displayItems;
 document.write("<br/> The number of items in studens array is " + students.length);
 document.write("<br /> The SORTED students array<br/>");
 students.sort();
 students.displayItems();
 document.write("<br />The REVERSED students array<br/>");
 students.reverse();
 students.displayItems();
 document.write("<br/>The student array after REMOVING the LAST items<br/>");
 students.pop();
 students.displayItems();
 document.write("<br/>The students array after PUSH<br/>");
 students.push("New Stuff");
 students.displayItems();