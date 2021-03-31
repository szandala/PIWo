"use strict"
window.onload= ()=>{
    document.getElementById("sub").classList = "btn btn-warning";
}


//function adder () {}
const adder = () => {
    let a = document.getElementById("number-a").value;
    const b = Number(document.querySelector("#number-b").value);

    // debugger
    if(a === "") {
        console.log("a jest puste");
        return
    } else
        a = Number(a);

    if (isNaN(a) || isNaN(b)){
        console.log("a lub b nie jest liczba");

        // $("#modal").show();
        $("#modal").toggle("slow");
        $("#modal").click(event => {
            // debugger
            $("#modal").toggle();
            // event.currentTarget.style.display = "none";
        });

        // const modal = document.getElementById("modal");
        // modal.addEventListener("click", (event) => {
        //     modal.style.display = "none";
        // });

        return
    }
    // boolean, string, number, object, undefined i null
    console.log(`${a} + ${b} = ${a+b}`);

    const newP = document.createElement("p");
    newP.innerHTML = `${a} + ${b} = ${a+b}`;

    // const list = document.getElementById("operations-list");
    // list.append(newP);
    document.getElementById("operations-list").append(newP);



}
