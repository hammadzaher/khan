

function addition(){
    let userInput1 = document.querySelector("#input1").value;
    let userInput2 = document.querySelector("#input2").value;
    // let opt = document.querySelector("#operator").value;
    let result = Number(userInput1) + Number(userInput2)
    // console.log("opt" , opt);
    document.querySelector("#result").innerText = result ;