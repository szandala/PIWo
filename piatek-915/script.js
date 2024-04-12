"use strict";

const adder = () => {
    console.log("Dodaję!");

    const numberA = document.getElementById("number-a");
    // console.log({numberA}); // wypisanie obiektu
    const numberB = document.querySelector("#number-b");
    // const numberB = $("#number-b"); //jQuery

    if (numberA.value === "" || numberB.value === "") {
      console.log("A lub B jest puste!!!");
      const modal = document.getElementsByTagName("dialog")[0];
      modal.showModal();




      return;
    }

    const numA = Number(numberA.value);
    const numB = Number(numberB.value);

    if(isNaN(numA) || isNaN(numB)){
      console.log("A lub B jest nieliczbą");
      return;
    }

    console.log(`${numA} + ${numB} = ${numA + numB}`);

    const listItem = document.createElement("li"); // <li></li>
    listItem.innerText = `${numA} + ${numB} = ${numA + numB}`;

    const theList = document.getElementById("unordered-list");
    theList.append(listItem);
}

window.onload = () => {
  const button = document.getElementById("closing");

  button.addEventListener("click", () => {
    const modal = document.getElementsByTagName("dialog")[0];
    modal.close();
  });
}
