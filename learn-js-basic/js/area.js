const records = [];




function calcArea(width,breadth){
    const area = width * breadth
    const recordObject = {
        width: width + "ft",
        breadth: breadth + "ft",
        area: area + "sqft"
    }
    records[records.length] = recordObject
    return area+"sqft";
    }

console.log (calcArea(17,60))
console.log (calcArea(20,40))
console.log (calcArea(30,50))


// show record
console.table(records)
