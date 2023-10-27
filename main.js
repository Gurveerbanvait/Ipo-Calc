// ipo Calc

// button click litsener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let height = +document.getElementById("height-in").value;
  let radius = +document.getElementById("radius-in").value;

  //process
  let total = Math.PI * (radius * radius * height);

  let total2 = 2 * Math.PI * radius * radius + 2 * Math.PI * radius * height;

  //output
  document.getElementById("output").innerHTML = total;

  document.getElementById("output2").innerHTML = total2;
}
