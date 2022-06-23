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
    let div = document.querySelector("#" + el.day).children[0];
    div.style.height = el.amount + "px";
  });

  result.forEach((el) => {
      let div = document.querySelector("#" + el.day).children[0];
    if (el.amount == max) {
      div.classList.add("cyanColumn");
    } else {
      div.classList.add("softRedColumn");
    }
  });
});
