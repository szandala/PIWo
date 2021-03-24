"use strict"

const evaluate = () => {
    let value = document.getElementById("number-a").value;
    if(value === "") {
        console.log("A jest puste");
        return
    }
    const a = Number(value);

    value = document.querySelector("#number-b").value;
    if(value === "") {
        console.log("B jest puste");
        return
    }
    const b = Number(value);
    if (isNaN(a) || isNaN(b)){
        // console.log("Co najmniej jedna liczba jest NaN");
        const modal = document.getElementById("modal");
        modal.style.display = "block";
        modal.addEventListener("click", (event) =>{
            event.target.style.display = "none";
        });
        return
    }

    return [a,b];
}

const adder = () => {
    const tempVar =  evaluate();
    let a,b;
    if (tempVar) {
        [a,b] = tempVar;
    }else
        return

    //debugger
    console.log(a+b);
    const newP = document.createElement("p");
    newP.innerHTML = `${a} + ${b} = ${a+b}`;
    newP.classList = "btn btn-warning";
    $("#operations-list").append(newP);
    // $("#sub").hide("fast");


}
