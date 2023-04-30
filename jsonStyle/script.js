// let html = "";
// let bodyinit;
// async function start() {
//   await fetch("http://localhost:3002/card/")
//     .then((res) => res.json())
//     .then((data) => {
//       body = data.body;
//       $("body").attr("style", body.style);
//       childCreate(child[0].div).attr("style", dataDiv.style);
//       // ${dataDiv}.attr("style",dataDiv.style)
//       childCreate(body.child);
//       $("body").append(html);
//       $("div").innerHtml = "Hello";
//     })
//     .catch((error) => console.log(error));
// }

// function childCreate(paraVal) {
//   let dataDiv = paraVal[0].element;

//   // style="width: 500px;height: 180px;background-color: teal;border-radius: 12px;display: flex;flex-wrap: wrap;justify-content: space-around;align-items: flex-start;padding: 20px;">
//   // <div style="width: 30%;"><img src="" alt=""></div>
// }
let html = "";
fetch("./app.json")
  .then((res) => res.json())
  .then((data) => {
    let body = data.body;
    if (body.style != undefined) $("body").attr("style", body.style);
    childCreate(body.child);
    $("body").append(html);
  })
  .catch((error) => console.log(error));

let childCreate = (tags) => {
  for (const tag of tags) {
    html += `<${tag.element}`;
    html += tag.style != undefined ? ` style='${tag.style}'` : "";
    html += tag.src != undefined ? ` src=${tag.src}` : "";
    html += tag.text != undefined ? `>${tag.text}` : ">";
    tag.child != undefined ? childCreate(tag.child) : "";
    html += `</${tag.element}>`;
  }
};
