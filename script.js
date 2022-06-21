// alert("Attached");

let f = fetch("./data.json").then(results => results.json()).then(console.log);
