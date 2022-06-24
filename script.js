const url = "./data.json";
function getData(url) {
  return fetch(url).then((response) => response.json());
}

getData(url).then((result) => {
  let max = 0;
  result.forEach((el) => {
    console.log(el);
    if (el.amount > max) {
      max = el.amount;
    }
    let chartTooltip = document.querySelector("#" + el.day).children[0];
    let chartColumn = document.querySelector("#" + el.day).children[1];
    chartColumn.style.height = el.amount + "px";
    chartTooltip.textContent = "$" + el.amount;
  });

  result.forEach((el) => {
    let chartColumn = document.querySelector("#" + el.day).children[1];
    if (el.amount == max) {
      chartColumn.classList.add("bg-cyan");
    } else {
      chartColumn.classList.add("bg-softRed");
    }
  });
});
