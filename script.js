/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a...
...
*/

//B. Strings
let firstVariable="Hello World";
firstVariable=3;
secondVaraible=firstVariable;
secondVariable="Hello again";
console.log (firstVariable);
let yourName="alex"
console.log(`Hello, my name is ${yourName}`)

//C Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a<b);
  console.log(c>d);
  console.log('Name'==='Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false  && false && false && false || true);
  console.log(false === false);
  console.log(e == 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


  //*D the farm  
const animal="dog";
  if (animal==="cow"){
console.log("moooooo");
  }else{
  console.log("hey! You are not a cow!")};

  //E.Driver's Ed
  const Age=16;
  if (Age>15){
    console.log("Here are the keys");
  }else{
    console.log("Sorry, you're too young!");
  }

  /*II. Loops
Remember: USE letwhen you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)*/

//A. The bacis 
//Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i=0; i<=10; i++){
    console.log(i);
}


//Write a loop that will print out all the numbers from 10 up to and including 400

for (let i=10; i<=400; i++){
    console.log(i);
}


//Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i=12; i<4000; i+=3){
    console.log(i);
}

//B. Get even
//Print out the numbers that are within the range of 1 - 100
for (let i=12; i<=100; i+=2){
    console.log(i);
}


//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i=12; i<=100; i++){
  if (i%2===0)
    {console.log(`${i} <-- is an even number`)}

  else {console.log(i)
    }
}

//C. Give me Five
for (let i=0; i<=100; i++){
    if(i%5==0)
{console.log(`i found a ${i}. High Five!`);}
else if (i%3==0)
    console.log(`i found a ${i}. Three is a crowd!`);
    else {console.log(i);}
}

//D. Saving account 
let bankAccount=0
for (let i=0; i<=100; i++){
bankAccount= bankAccount + i;
}
bankAccount= bankAccount*2
console.log(bankAccount);


//Arrays & Control Flow
// What are the things in an array called?
//elements
// Do Arrays guarantee those things will be in order?
//always same order 
// What real-life thing could you model with an array?
//phone numbers


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
newArray=['Hello', 'World', 'js']
console.log(newArray);

//C.Accessing Elements
const randomThings=[1, 10, "Hello", true];
//calling the 1st element 
console.log(randomThings[0]);

//change the element- splice
randomThings.splice(2,1, 'World')
console.log(randomThings);

//D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[3];
ourClass.splice(5,1,"Octocat")
ourClass.splice(6,0, "Cloud City")
console.log(ourClass);

//E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.splice(4,0,'Aegon', 'alex');
myArray.splice(0,1);
myArray.splice(0, 0, 'Bob Marley');
myArray.splice(5,1);
myArray.reverse();
console.log(myArray);


//Biggie Smalls
let x=10
if (x<100){
  console.log('little numbers');
}else{
  console.log('big numbers');
}

//G. Monkey in the Middle
let y=10
if(y<5){
  console.log('little number');
}else if (y>10){
  console.log('big number');
}
else{
console.log('Monkey');
}

//*H What's in yout clost?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//1.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);
//2.
kristynsCloset.splice(5,0,'raybans');
//3.
kristynsCloset.splice(6,1,'stained knit hat');
//4. 
console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][0]);
console.log(thomsCloset[2][1]);
console.log(`Thom is looking fiece in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][1]}`);
thomsCloset[1][2]='Footie Pajamas'; 

console.log(thomsCloset)


//*IV Functions
//A. Print Greeting
function printGreeting(name1){
console.log(`Hello there, ${name1}!`);
}
console.log(printGreeting('Slimer'));


//B.Print Cool
function printCool(name2){
  console.log(` ${name2} is cool`);
}
console.log(printCool('Capitan Reynolds'));

//C.calculateCube
function calculateCube(num){
  return num*num*num;
}
console.log(calculateCube(5));
//D.isVowel
function isVowel(x){
  x=x.toLowerCase();
  if(x==='a'||x==='e'||x==='i'||x==='o'||x==='u'){
    return true;
  }
  else{return false;}
}
console.log(isVowel("e"));

//E.getTwoLengths
function getTwoLengths(y,z){
  return [y.length, z.length]

}
console.log(getTwoLengths("Hank", "Hippopopalous"));


//F.getMultipleLength
//!need to study
function getMultipleLengths(arr){
  return arr.map(function(str){
    return str.length;
    })
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//G.maxofThree
function maxOfThree(x,y,z){
  maxOfThree.sort(maxOfThree);

}
console.log(maxOfThree(6, 9, 1));

//H.printLoungesWord

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//Object
//A.Make a user


//B.Update the user

//C.Adding keys and values

//D. Shopaholic!

//E.Object-within-object

//F.Loops


//G.Functions can operate on objects

//Cat Combinator
//1. Mama Cat

//2. Papa cat

//3. Combine Cats

//4.Cat brain bender

