// const ele = document.getElementById("heading");
// ele.innerText = "from Apna College students";

// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerHTML = "<h2>New Hello</h2>";

// let idx = 0;
// for(let div of divs){
//     console.log(div.innerHTML = `<h2>New Hello</h2> ${idx}`);
//     idx++;
// }

// let btn = document.createElement("button");
// btn.innerHTML = "<h3>click me</h3>";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// document.querySelector("body").prepend(btn);

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
})