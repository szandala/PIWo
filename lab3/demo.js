"use strict"
// const x = 5;
// let y = 6;

// function func(parametry) {}
// const func = function (parametry) {}
// const func = (parametry) => {}

const adder = () => {
    // mojaFajnaZmienna
    const numberA = Number(document.getElementById("number-a").value);
    // const X = document.querySelector(".X");
    // console.error({X});
    let numberB = document.querySelector("#number-b").value;

    if (numberB === "") {
        console.warn("b is empty string");
        return;
    }

    if(isNaN(numberA) || isNaN(numberB)) {
        console.log("is NaN, exciting");
        $("#modal").toggle("slow");
        $("#modal").click((event)=>{
            $("#modal").hide();
            console.log({event});
        });
        return;
    }

    numberB = Number(numberB);

    // console.log("statyczny tekst" + numberA);
    // debugger;
    // console.log({numberB}, {numberA});

    console.log(`${numberA} + ${numberB} = ${numberA + numberB}`);

    const operationsList = document.getElementById("operations-list");

    const newP = document.createElement("p"); // <p> </p>
    newP.innerHTML = `${numberA} + ${numberB} = ${numberA + numberB}`;
    operationsList.append(newP);
}
