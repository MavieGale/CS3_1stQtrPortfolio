// no script tag needed here 
// use let for variables :))

let maxAge = window.prompt ("Enter your max age: ", "100")
let numPerDay = window.prompt ("Enter your number per day", "100") 
let age = window.prompt ("Enter your age:", "14")

if (confirm(`Is ${maxAge}, ${numPerDay}, ${age} really your numbers?`)){
    console.log("okay!");
}

else {
    console.log("Run the code again!")
}