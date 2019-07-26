// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function manners(x, y, cb){
  cb(x + y);
};
whatsUp("Your", "Welcome", (whatYouSay)=>{
  console.log(whatYouSay);
});
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2, cb){
  cb((num1+num2));
  };
  const consume = new add(3, 5, (add)=>{
  //console.log(add);
  });
  

  function multiply(num1, num2, cb){
  cb((num1*num2))
  };
 add(3, 5, (product)=>{
  console.log(product);
  });
function whatsUp(first, last, cb){
    cb(first + last);
    };
    whatsUp("Bob", "Smith", (fullName)=>{
    console.log("Hello," + " " + (fullName));
    });
/* Step 3: Check your work by un-commenting the following calls to consume(): */
//consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nested functions can look outside their function but not inside another fucntion.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction()
