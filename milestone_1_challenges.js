//Challenge 1 : Sum of two numbers
function addition(num1,num2){

    return num1 + num2

}
console.log("Challenge 1 : Sum of two numbers is")
  let result = addition(100,100)
  console.log(result)
// End


//challenge 2 : converting 10 min into seconds.
function convert(){
    let minutes = 10;
    let results = minutes*60;
    console.log("Iam the function that is converting minnutes into seconds")
    console.log(results)
}
convert()
//end

//Challenge 3 : Calculating the perimenter of a rectangle
function perimenter(){
    let length = 20;
    let width = 10;
    let answer =  ((length + width)*2)
    console.log("Iam the fuction for calculating perimeter of a rectangle")
    console.log(answer)
}
perimenter()

//end 

//challenge 4: checking if number is negative
function isNegative(){
    console.log("Iam the function of checking if a number is negative")
    let number = -10;
    if (number < 0){
        console.log("The number is negative")
    }
    else
    console.log("The number is postive")
}
isNegative()

//end

//challenge 5: checking if a person can drive.
function Drive(){
    console.log("Iam the function that is checking if you are old enough to drive")
    let fname = "maxwell"
    let Lastname = "Kuria";
    let age = 24
    if (age >=18){
        console.log(`Congratulation ${fName} ${lastName}`);
    }
     else{
        console.log(`sorry  ${fName} ${lastName} you are not old enough`);
     }
}

//end

//challenge 6: finding the largest number
function findlargest(){
    console.log("Iam the function that is comparing which of 3 number is bigger")
    let num1 = 100;
    let num2 = 200;
    let num3 = 300;
    let max = Math.max(num1, num2, num3);
    console.log(`Between   ${num1} ${num2} ${num3} this is the largest ${max} `);
}
findlargest()
//end

//challenge 7: calculate body mass index
function calculateBM1(){
    console.log("iam the function for calculating BMI")
    let height = 62;
    let weight = 2;
    let BMI = weight/(height*height)
    
    if(BMI < 18.5){
        console.log(`your BMI IS   ${BMI} you are underweight} `);
    }
    else if(BMI =18.5 || BM1 <=24.9){
        console.log(`your BMI IS   ${BMI} you are Normal weight} `);
    }
    else if(BMI = 25 || BM1 <=29.9){
        console.log(`your BMI IS  ${BMI} you are Overweight} `);
    }
    else if(BMI >= 30){
        console.log(`your BMI IS   ${BMI} you are obese} `);
    }
    }
    calculateBM1()
//end

//challenge 8 ; greeting based on time

function greetuser(){
    let time = new Date();
   let hours = time.getHours();
   console.log("Iam a greeting function")

   if(hours >= 5 || hours <= 11){
    console.log(`Good morning alice`);
}
else if(hours >= 12 || hours <=17){
    console.log(`Good afternoon ,alice `);
}
else if(hours >= 18 || hours <=21){
    console.log(`good evening alice`);
}
else if(hours >= 22 || hours <= 24){
    console.log(`good night,alice`);
}

}
greetuser()

//end

//challenge: fizzbuz
function fizzbuzCheck(){
    let number = 15;
    let results3 = number%3;
    let results5 =number%5;
    
   if(results3 == 0){
    console.log(`FIZZ Number is divisble by 3`);
}
else if(results5 == 0){
    console.log(`BUZZ number is divisible by 5 `);
}
else if(results3 == 0 && results3 == 0){
    console.log(`fizz buzz`);
}

}

fizzbuzCheck()

//end
