const url = "./data.json";
function getData(url) {
  return fetch(url).then((response) => response.json());
}

getData(url).then((result) => {
  //   console.log(result);
  result.forEach((el) => {
    console.log(el.day);
    let div = document.querySelector("#" + el.day).children[0];
    // div.classList.add("h-6");
    // div.classList.remove("rounded");
  });
});
