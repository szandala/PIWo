"use strict"
//    const funk = function (params) {}
//    function funk () {}
// maleLiteryKazdeNoweSlowoZDuzej

// document.onload()
const adder = () => {
//    var nazwa =...;
    const numberA = Number(document.getElementById("number-a").value);
    let numberB = document.querySelector("#number-b").value;

    // console.log(numberB);
    // console.log({numberB});
    // debugger;
    if(numberB === ""){
        console.warn("Number b jest pusty");

        $("#modal").toggle("slow"); //show() lub hide()
        $("#modal").off("click").click(() =>{
            $("#modal").toggle("slow");
        });
        return;

    }
    numberB = Number(numberB);

    if(isNaN(numberB)){
        console.error("B is NaN");
        return;
    }


    console.log(`${numberA} + ${numberB} = ${numberA + numberB}`);

    const operationList = document.getElementById("operations-list");
    const newP = document.createElement("p"); // <p></p>
    newP.innerHTML = `${numberA} + ${numberB} = ${numberA + numberB}`;
    operationList.append(newP);
}
