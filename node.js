//let num1 = 20
//console.log(num1);

//let nameOfUser = prompt("what is your name?");
//alert(nameOfUser)
//confirm;
//console.log(nameOfUser);

//let num1 = 10
//let num2 = 30
//console.log(num1 * num2);

//1. Write a program that determines if a given year is a leap year. A leap year is divisible by 4 but not by 100 unless also divisible by 400.

//2. Write a function that finds the largest of three given numbers.

//function isGrade(numGrade) 
// if (numGrade >= 90 && numGrade <= 100) {
  //  return "A";
  //} else if (numGrade >= 80 && numGrade <= 89) {
  //  return "B";
  //} else if (numGrade >= 70 && numGrade <= 79) {
  //  return "c";
  //} else if (numGrade >= 60 && numGrade <= 69) {
   // return "D";
  //} else if (numGrade < 60) {
  //  return "F";
  //}

//console.log(isGrade(100));

//let num1 = 35
//let num2 = 45
//let num3 = 55
//let str = "School";
//console.log(str[0].toUpperCase() + str.slice(1));
//function findLargestNumber(num1, num2, num3) {
//}

// Solution 1.


let year = 2020;
function isLeapYear(year)
  
    if (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); {
    return "True";
  }
    else {
      return "False"
    }

  console.log(isLeapYear);

  // Solution 2.

  let num1 = 8, num2 = 13, num3 = 5;

  function findLargestNumber(x, y, z)
    if (x >= y && x >= z ){
      return x("largestNumber")
    }
      else if (y >= x && y >= z){
        return y("largestNumber")
      }
        else if (z >= x && Z >= y){
          return Z("largestNumber")
        }
          else ("return invalid");{
          }
      
        console.log(findLargestNumber);

        //Solution 3.

        function fizzBuzz();
          for(let index = 1; index <= 100; index++);
          if (index % 3 === 0 && index % 5 === 0){
          }
            return("FizzBuzz");

         if (index % 3 === 0){
          return("Fizz");
        }
          if(index % 5 === 0){
            return("Buzz");
          }
            else return(index){
            }

            console.log(fizzBuzz);


            //Solution 4.

            let age = 18;

            function canVote(age);
            if(age >= 18){
              return "True";
            } else if(age < 18){
              return "False";
            }
              console.log(canVote);


              //Solution 5.

              function calculateAverage(num1, num2, num3);
                let sum = num1 + num2 + num3;
                let average = sum/3;
                return "average";

                console.log(calculateAverage);