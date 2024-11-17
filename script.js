// // There are 3 types of Variables let,var,const
// let naam = "Akshat"; //it declares the variables
// var place = "Nagpur";
// const airline = "Emirates";

// console.log("naam:", naam);
// console.log("place:", place);
// console.log("airline:", airline);
// // console.log  is use to print the Variable in Console of the Browser
// //there are 2 group let,var and const
// //we cant reasign cost variable
// //we can re-declare let but we cannot re-direct var

// // Data Types

// //Primitive Data Type
// let Topic = "Primitive Data Type";
// console.log("Topic:", Topic);
// let num=1;
// let str="Akshat";
// let bool="true";
// let n =null;
// let x;

// console.log("num",typeof(num));
// console.log("str",typeof(str));
// console.log("bool",typeof(num));
// console.log("n",typeof(n));
// console.log("x",typeof(x));

//Complex Data Type
//in object before colon is called key and after colon is called value

// let obj = {
//   name: "Akshat",
//   place: "Nagpur",
// };

//  console.log("OBJ:",obj);
//  console.log("OBJ TYPE:",typeof(obj));

//to find the value of the particular key

//  console.log ("OBJ:",obj["place"]),
//  //or
//  console.log("OBJ TYPE:", obj.place);

//  const namesArray=  ["Rakim","Tupac","Biggie Smalls","Big Daddy Kane"]
//  console.log(namesArray[2])
//  console.log("namesArray TYPE:",typeof(namesArray))

//Operators in Javascript

// Arithmatic Operators

// let a = 10;
// let b = 5;

// console.log("a+b", a + b);

// console.log("a-b", a - b);

// console.log("a*b", a * b);

// console.log("a/b", a / b);

// console.log("a%b", a % b);

//Comparison Operators: ==,===,!=,!==,>,<,>=,<=

// let num1 = 5;
// let num2 = 6;

// console.log("num1== num2", num1 == num2);

// console.log("num1=== num2", num1 === num2);

// console.log("num1!= num2", num1 != num2);

// console.log("num1!== num2", num1 !== num2);

// let num1=10;
// let num2=15;

// console.log("num1>num2", num1 > num2);

// console.log("num1<num2", num1 < num2);

// console.log("num1>=num2", num1 >= num2);

// console.log("num1<=num2", num1 <= num2);

// if-else
// let num1=10;
// let num2=15;

// if(num1==num2){
//     console.log(true) //= is the opposite of !=
// }
// else{
//     console.log(false);
// }

// ---------------------Switch Statement

// const day = 5;
// let val = "";

// switch (day) {
//   case 1:
//     val = "Sun";
//     break;
//   case 2:
//     val = "Mon";
//     break;
//   case 3:
//     val = "Tue";
//     break;
//   case 4:
//     val = "Wed";
//     break;
//   case 5:
//     val = "Thu";
//     break;
//   case 6:
//     val = "Fri";
//     break;
//   case 7:
//     val = "Sat";
//     break;
//   default:
//     val = "Not a valid day";
//     break;
// }
//  console.log("This is the day value", val);

// ---------------------for loop--------------------------------------

for(let i=-19; i < -20; i++) {
  console.log("i value",i);
}

// // ----------------post increment 
// let val= 1;
// console.log("val1", val++);
// console.log("val2", val++);
// console.log("val3", val1); //first value then increament

//----------------------pre-increament

// let val= 1;
// console.log("val1", ++val);
// console.log("val2", ++val);
// console.log("val3", val); //first increament then val

// let val2= 150;
// console.log("val1", ++val2);
// console.log("val1", ++val2);
// console.log("val1", val2++);
// console.log("val1", ++val2);
// console.log("val1", val2);
// console.log("val1", ++val2);
// console.log("val1", val2++);
// console.log("val1", val2++);
// console.log("val1", ++val2);
// console.log("val1", ++val2);

//151,152,152,154,154,155,155,156,158,159


//----------------------While Loop
// let x = 10;
// while (x > 0 && x== Infinity) {
//   console.log("x value:", x);
//   x--;
// }