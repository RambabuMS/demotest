// class Car {
//     //it used to set the value of the properties
//     constructor(color, fuel, rpm, speed, year) {
//       this.color = color;
//       this.fuel = fuel;
//       this.rpm = rpm;
//       this.speed = speed;
//       this.year = year;
//     }
  
//     Specification() {
//       let spec = `
//       Color: ${this.color}
//       Fuel: ${this.fuel}
//       RPM: ${this.rpm}
//       Speed: ${this.speed}
//       Year: ${this.year}
//       `;
//       return spec;
//     }
//   }
//   // create an object for the car class
//   let car1 = new Car("White", "Electric", 5000, 80, 2021); //Object constructor
//   console.log(car1.Specification());

//   1.Create a class Product 
// 2.You create a object and pass all the values 
// id,name,price,quantity,status 



// create a method getTotal
// 2
// 10
// 20



// 5
// 100
// 500

// class Product {
//     constructor(count,price,count1,price1){
//         this.count = count;
//         this.price = price;
//         this.count1 = count1;
//         this.price1 = price1;
//     }

//     getTotal(){
//         let total = `
//         count : ${this.count}
//         price : ${this.price}
//         count1: ${this.count1}
//         price1 : ${this.price1}
//         `;
//         return 
//     }
// }




















// Create a class with name Calc 
// create an object for the class Calc
// Take an array of parameter through object 
// 1,2,3,4,5
// Create a method getAverage()
// if(length of an array is ->0)
// return 0;
// //Logic Here

// 15/5=>3

// DIsplay the output

// Task 1: Simple Programs todo for variables

//1. Declare four variables without assigning values and print them in console

// let name = String;

// let age = Number;

// let address = [];

// let loc = Boolean;

// console.log(name + " "+ age + " " + address + " " + loc);

//2. How to get value of the variable myvar as output

// let myvar = 1;

// console.log(myvar);
 
// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

// let first_name = "Rambabu";

// let last_name = "M";

// let marital_status = "Single";

// let country = "India";

// let age = 25;

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line

// let bio = ["Rambabu","M","Single","India",25];


// 5. Declare variables and assign string, boolean, undefined and null data types

    // let s = String;

    // let decision = Boolean;

    // let nothing = undefined;

    // let novalue = null;


// 6. Convert the string to integer

// let num = "78";

// let num1 = parseInt(num);

// let num2 = Number(num);

// let num3 = +num;

//7. Write 6 statement which provide truthy & falsey values.

// let pi = 3.1412;

// pi = "3.1412";

// pi = [3.1412];  

// if( 3.1412 == "3.1412") => returns true

// if(3.1412 == [3.1412]) => returns true

// if("3.1412" == [3.1412]) => returns true

// if(3.1412 === "3.1412") => returns false

// if(3.1412 === null) = > returns false

// if(3.1412 === NaN) => returns false
 

//Task 2: Simple Programs todo for Operators

//1.Square of a number

     let a = 5;
     let square = a * a;

     console.log(square);
 //2.Swapping 2 numbers

     let a = 5;
     
     let b = 10;

     let temp;

     temp = a;

     a = b;
      b = temp;
    // or  [a,b] = [b,a]; 
      console.log(`value of a after swapping ${a}`);
      console.log(`value of b after swapping ${b}`);

  //3.Addition of 3 numbers
    
  let a = 5;

  let b = 8;

  let c = 10;

  let sum = a + b + c;

  console.log(sum);

  //4.Celsius to Fahrenheit conversion

  let celcius = 37;

  let fahrenheit = celcius * 9 / 5 + 32;

  console.log(fahrenheit);

//5.Meter to miles

let meter = 3700;

let mile = meter * 0.00062137119;

console.log(mile);

//6.Pounds to kg

let pound = 75;

let kg = pound / 2.2046;

console.log(kg);

//7.Calculate Batting Average

  let scores = [65,38,98,65.48,52,25];

  let n = scores.length;

  let total = 0;
  scores.map((a) => {
    total += parseInt(a);
  });
  
  let average = total / n;

  console.log(average);

//8.Calculate five test scores and print their average
  
   let test1 = 65;
   let test2 = 45;
   let test5 = 70;
   let test4 = 90;
   let test5 = 40;

  let average = (test1 + test2 + test3 + test4 + test5) / 5;

   console.log(average);

//9.Power of any number x ^ y.

   let x = 35;
   let y = 7;

  let power = Math.pow(x,y);
  
  console.log(power);

//10. Calculate Simple Interest

    let P = 85000;

    let N = 5;

    let R = 12;

    let SI = (P * N * R) / 100;

    console.log(SI);

//11.Calculate area of an equilateral triangle

    let a = 12;

    let area = ((Math.sqrt(3)) / 4 ) * (a * a);

    console.log(area);

//12. Area Of Isosceles Triangle

     let b = 12;

     let h = 15;
      
     let area = (b * h) / 2;
     console.log(area);

//13. Volume Of Sphere
   
      let r = 8;

      let volume = (4 / 3) * Math.PI * (r * r * r);

      console.log(volume);

//14. Volume Of Prism
      
      let l = 7;
      let w = 4;
      let h = 12;
      
      let B = l * w;
      let voulume = B * h;

      console.log(volume);

//15. Find area of a triangle.
   
     let b = 6;
     let h = 8;

     let area = (b * h) / 2;

     console.log(area);

//16. Give the Actual cost and Sold cost, Calculate Discount Of Product

      let Actual_cost = 200;

      let sold_cost = 150;

      let Discount = Actual_cost - sold_cost;

      let Discount_percentage = ((Actual_cost - sold_cost)/Actual_cost) * 100;

      console.log(`
                  Discount : ${Discount}
                  Discount Percentage : ${Discount_percentage}`);

//17. Given their radius of a circle and find its diameter, circumference and area.

        let radius = 10;

        let diameter = radius * 2;

        let circumference = 2 * Math.PI * R;

        let area = Math.PI * radius * radius;
 
         console.log(`
                      Diameter : ${diameter}
                      Cicumference : ${circumference}
                      Area : ${area}`);

//18. Given two numbers and perform all arithmetic operations.

       let a = 10;

       let b = 5;

       let add = a + b;
       let sub = a - B;
       let mul = a * B;
       let div = a / b;
       let mod = a % B;

       console.log(`
                    add : ${add}
                    sub : ${sub}
                    Mul : ${mul}
                    divide : ${div}
                    Modulus : ${mod}`);

//19. Display the asterisk pattern as shown below(No loop needed):

     let star = "*****";
     console.log(`
                 ${star}
                 ${star}
                 ${star}
                 ${star}
                 ${star}`);


//20. Calculate electicity bill

       let oneday = 100;

       let unit_rate = 10;

       let one_unit = oneday/100;

       let bill = (one_unit * 24 *30) * unit_rate;

       console.log(bill);


//Task 3: Simple Programs todo for Condition , Looping and Arrays

//1. Write a loop that makes seven calls to console.log to output the following triangle:

       let n = 7;

       let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  string += "\n";
}
console.log(string);

//2.Iterate through the string array and print it contents

               var strArray= ["<option>Jazz</option>",
                              ,"<option>Blues</option>",
                               ,"<option>New Age</option>",
                                 ,"<option>Classical</option>",
                                    ,"<option>Opera</option>"]

                      for(let i = 0; i < strArray.length; i++){
                              console.log(strArray[i]);
                      }

//Arrays
                  
//1. write a code to count the elements in the array . Don’t use length property

              var myarray=[11,22,33,44,55]
 
              let length = 0;
              for (let i of myarray){
                length++;
              }
              console.log(length);


//2. Declare an empty array;
      let foods = [];

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

      let foods = ["adai","sambar","idly","Biryani","dosa","poori","chappathi","fried rice","puli kulambu","sothi kulambu","white curry",
                     "idiyappam","curd rice","rasam","payasam","Mushroom","upma","rice","paneer","gobi"];

//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
                   let fifth = foods[4];
                   console.log(fifth);                     
//Find the length of your foods array
    
            let len = 0;
            for(let a of foods){
              length++;
            }
            console.log(len);

//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.


            let friends = [
                           “Mari”,
                           “MaryJane”,
                           “CaptianAmerica”,
                           “Munnabai”,
                           “Jeff”,
                           “AAK chandran”];

                           function dataHandling(input){
                            for (var i = 0; i < input.length; i++) {
                                  friends[0] = "Munnabai"
                            }
                            }
                            dataHandling(friends);

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
                            const friends = [
                            “Mari”,
                            “MaryJane”,
                            “CaptianAmerica”,
                            “Munnabai”,
                            “Jeff”,
                            “AAK chandran”
                            ];
                            function dataHandling(input){
                            for (var i = 0; i < input.length; i++) {
                            
                            }
                            }
                            dataHandling(friends);

//Find the person is ur friend or not.
                            const friends = [
                              “Mari”,
                              “MaryJane”,
                              “CaptianAmerica”,
                              “Munnabai”,
                              “Jeff”,
                              “AAK chandran”
                              ];
                              function dataHandling(input, name){
                              for (var i = 0; i < input.length; i++) {
                              
                              }
                              }
                              let found = dataHandling(friends,”Jeff”);
                              console.log(found);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
 
                                    var friends1 = [
                                      “Mari”,
                                      “MaryJane”,
                                      “CaptianAmerica”,
                                      “Munnabai”,
                                      “Jeff”,
                                      “AAK chandran”
                                      ];
                                      var friends2 = [
                                      “Gabbar”,
                                      “Rajinikanth”,
                                      “Mass”,
                                      “Spiderman”,
                                      “Jeff”,
                                      “ET”
                                      ];
                                      function dataHandling(input){
                                      //Your code goes here
                                      }
                                      dataHandling(friends);


// 1.Get the first item, the middle item and the last item of the array
// 2. Add your name to the end of the friends array, and add another name to beginning.
// 3. Add Mr or Ms to the names in the friends array.
// 4. Concat all the names the friends array and return as comma “,” seperated string.
// 5. Find the friends names who has letter ‘a’ and return the list.
// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
// 7. Find the names and return the list starting with letter M.
// 8. Find the name with max characters and return the name.
// 9. Find the name with min characters and return the name.