let testArray1 = [1, 3, 6, 7 - 4, 7, -5, 0, -7];
let testArray2 = [1, -4, 7, -5, 0, -7];

//challenge1
function challenge1(testArray) {
    testArray = testArray.filter(value => value > 0);
    console.log(testArray);
    document.getElementById("challenge1-result").innerHTML = testArray;
}
challenge1(testArray1);
//challenge2
function challenge2(testArray1, testArray2) {
    let newArray = testArray1.concat(testArray2);
    console.log(newArray);
    document.getElementById("challenge2-result").innerHTML = newArray;
}
challenge2(testArray1, testArray2);


//challenge3

let testObject1 = {
    test1: "qq"
}
let testObject2 = {
    test2: "qqqwq",
    test3: "qqqwq",
}
let testKey = "test1";

function challenge3(testObject, testKey) {
    if (testObject.hasOwnProperty(testKey)) {
        console.log("yes the key is here");
        document.getElementById("challenge31-result").innerHTML = "yes the key is here"
    } else {
        document.getElementById("challenge31-result").innerHTML = "no the key is not here"
        console.log("no the key is not here");
    }
}

challenge3(testObject1, testKey); //the except value yes is here
challenge3(testObject2, testKey); //the except value no is not here

//challenge4

let testArgument1 = "testttttt";
let testArgument2 = new Array();

function challenge4(arrgument) {

    result = Array.isArray(arrgument);
    if (result) {
        console.log("yes it is array");
        document.getElementById("challenge4-result").innerHTML = "yes it is array";
    } else {
        document.getElementById("challenge4-result").innerHTML = "no it is not array";
        console.log("no it is not array");
    }
}
challenge4(testArgument1);
challenge4(testArgument2);


//challenge5

let testWord = "amro";

function challenge5(testWord) {
    testWord = testWord.charAt(0).toUpperCase() + testWord.slice(1);
    document.getElementById("challenge5-result").innerHTML = testWord;
    console.log(testWord);
}
challenge5(testWord);


//challenge6

function bubbleSort(testArray1) {
    let len = testArray1.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (testArray1[j] > testArray1[j + 1]) {
                let tmpoArray = testArray1[j];
                testArray1[j] = testArray1[j + 1];
                testArray1[j + 1] = tmpoArray;
            }
        }
    }
    console.log(testArray1);
    document.getElementById("challenge6-result").innerHTML = testArray1;
    return testArray1;
}

bubbleSort(testArray1);