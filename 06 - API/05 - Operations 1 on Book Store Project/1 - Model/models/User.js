//?1. class user
class User {
    //?2. constructor()
    /*  
    ?3. variables
      constructor(name, password, email) {
        this.name = name;
        this.password = password;
        this.email = email;
       }
        - Or variables as object => storing the variables in the object.
        constructor(userData){
            this.userData = userData;
        }
     */
    constructor(userData) {
        this.userData = userData;
    }

    //code.. => initialize fn. => structure will be in controller.

}

//?4. Make an Instance (call the object)
//const instance = new MyClass();

// const user = new User(); => normal way for the first constrcutor way.
// storing the userData in user. => second constrcutor
const user = new User({
    name: "Ahmed Ali",
    username: "Ahmed",
    password: "12345",
    email: "ahmed@gmail.com"
});
// use the Run Code: Ctrl + Alt + N
console.log(User);//=> print class User
console.log(user);//=> print user object
console.log(user.userData);//=>print from name to email 
console.log(user.userData.password);//=> 12345
console.log(user.userData.email);//=> ahmed@gmail.com
console.log(user.userData.nameOfCity); //=> undefined or null?? undifind
/** When null, When undefined??
 * 
 * null: indicate that it has no meaningful value.
        let myVariable = null;
        console.log(myVariable); // Output: null
 * undifined: indicates that a variable has been declared but has not been assigned a value. 
        let myVariable;
        console.log(myVariable); // Output: undefined
        function myFunction(param) {
            console.log(param); // Output: undefined (if the function is called without passing a value for param)
        }
        myFunction();
 * ===========================================================
    - Use null when you want to explicitly indicate that a variable has no meaningful value, or when you want to reset a variable that previously held a value.
    - Use undefined when a variable is declared but hasn't been assigned a value yet, or when a function doesn't return a value, or when a function parameter is not provided.
    - It's important to note that null and undefined are distinct from each other, but they are both "falsy" values in JavaScript, meaning they evaluate to false in boolean contexts. This can lead to some confusion, so it's essential to use them correctly based on the intent of your code.
 */