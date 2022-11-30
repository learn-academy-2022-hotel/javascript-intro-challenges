// javascript conditionals - Hotel 11/30/22

// Javascript conditionals - aka decision trees,
//conditional statments, if/else statments
//produce an outcome

//structure
//if(true condition){
    // action it preforms
//}

// if - keyword that starts the conditional//
    //one if per conditional
    // ()- evaluates if the condition is true
    //{} - performs the action of the code block

 // conditions ()
        //Boolean value - true or false 
        // Produced bythree types of operators
            //equality operators == LOSSE OR === STRICT
            // LOGICAL OPERATORS && AND,  or ! bang operators
            //relational opertors  <, >, <=, >=

            // Equality
            var num = 22
            //console.log(num == 22)
            // output: true
            //console.log(num == "22")
            //output: true -flaw with using loose equality is that it will do a type coercion
            //console.log(num === "22")
            // output:false because different datatypes

            // Relational
            var ourCohort = ("hotel 2022")
            // console.log (num > ourCohort.length)
            // output true

            //logical
            //console.log(num === 22 && num > ourCohort.length)
            // output : true because both conditions are true
            //console.log(num 22 === && num < ourCohort.length)

    
            //console.log( num < ourCohort.length || num === 22 )

            //! - negation, bang operator, opposite
            //console.log(num === 22 && !num < ourCohort.length)
            let year = 2022
            //if(year === 2022){
            //    console.log("I am true")
            //}
            // output i am true

            //if(year === 2021){
           ///     console.log("last year")
           // }
            //else - keyword to crate a default output
            // if(year === 2021){
            //     console.log("last year")
            // } else {
            //     console.log("2022 is almost done")
            // }
    // else if - keyworld to create additional conditional statments
        // takes in a condition
        // can have as many as necessary
// string interpolation aka template literals
    // allows variables to be embedded in strings
    // `${variableName}`

        // let myColor = "green"
        // myColor = "purple"
        
        // if(myColor ==="purple") {
        //     console.log("you have exquisite taste")
        // } else if(myColor === "blue"){
        //     console.log("Because your color contributes to purple you are acceptable.")
        // } else {
        //         console.log ("I have a suggestion: purple!!!")
        // } 

    // let chores = 5 

    // if(chores >= 2) {
    //     console.log("$10")
    // } else if (chores >= 3) {
    //     console.log("$15")
    // } else if (chores >= 5) {
    //     console.log("$40")
    // }else {
    //     console.log("heres a hug")
    // }
    // output $10 to ensure that the conditional is property met place the most stringest first

    // better way 
    let chores = 5 

    if(chores >= 5) {
        console.log("$40")
    } else if (chores >= 3) {
        console.log("$15")
    } else if (chores >= 2) {
        console.log("$10")
    }else {
        console.log("heres a hug")
    }