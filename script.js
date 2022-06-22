const url = "./data.json";
function getData(url) {
  return fetch(url).then((response) => response.json());
}

getData(url).then((result) => {
  //   console.log(result);
  result.forEach((el) => {
    console.log(el);
  });
});
