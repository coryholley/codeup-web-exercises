//
// $("button").click(function () {
//     var userNum = prompt("Pick a number between 1-100")
//     if (userNum % 3 === 0 && userNum % 5 === 0) {
//         $("#results").html("Fizz Buzz" + " " + userNum)
//     } else if (userNum % 3 === 0) {
//         $("#results").html("Fizz" + " " + userNum)
//     } else if (userNum % 5 === 0) {
//         $("#results").html("Buzz" + " " + userNum)
//     }
// })

// const fizzBuzzGame = (num) => {
//     let userNum = prompt("Pick a number between 1-100")
//     if (userNum % 3 === 0 && userNum % 5 === 0) {
//         $("#results").html("Fizz Buzz" + " " + userNum)
//     } else if (userNum % 3 === 0) {
//         $("#results").html("Fizz" + " " + userNum)
//     } else if (userNum % 5 === 0) {
//         $("#results").html("Buzz" + " " + userNum)
//     }
// }

const fizzBuzzGame = (num = 30) => {
    for (let i = 0; i<=num; i++) {
        if (i% 3 === 0 && i % 5 === 0)
            console.log(`fizzbuzz`);
        else if (i % 3 === 0)
            console.log(`fizz`);
        else if (i % 5 === 0)
            console.log(`buzz`)
        else
            console.log(`${i}`)
    }
}

fizzBuzzGame(80)