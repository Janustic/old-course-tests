// function canIPassed (examMark,viperMark){
//     if (examMark >= 60 && viperMark >= 60){
//         return "U passed";
//     }
//     return "U failed";
// }

// console.log(canIPassed(50,60));

// function canICome(busNo){
//     if (busNo === 65 || busNo === 20){
//         return "U will reach km";
//     }
//     return "U cant reach km";

// }

// console.log(canICome(65,21));
// console.log(canICome(66,44));

// let a = "thz";
// console.log(a);
// a != a;
// console.log(a);
// a != a;
// console.log(a);

function nameInput(name){
    if (typeof name === "string")return "correct";
    return "input name";
}

console.log(nameInput(24));

function run(a,b,c){
    console.log(arguments);
}

console.log(run("a","b","c"));