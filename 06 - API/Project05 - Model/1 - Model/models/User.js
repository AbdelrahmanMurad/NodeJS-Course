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

//?4. Make an object

// const user = new User(); => normal way for the first constrcutor way.
// storing the userData in user. => second constrcutor
const user = new User({
    name: "Ahmed Ali",
    username: "Ahmed",
    password: "12345",
    email: "ahmed@gmail.com"
});

console.log(user);
console.log(user.userData);
console.log(user.userData.password);
console.log(user.userData.email);