// let showCode;
// $(document).ready(function () {
//   init();
//   $("input").keyup(function () {
//     var totalValue = Number($(this).val()) * Number($("#keycode").val());
//     let finalValue = parseInt(totalValue);
//     showCode = $("#keycode option:selected").text();

//     $(".convert").text(`${finalValue} ${showCode}`);
//     console.log($(this).val());
//   });
// });
// function init() {
//   fetch(
//     "https://v6.exchangerate-api.com/v6/4d98635d0ac48bb21eca967e/latest/USD"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);

//       for (const key in data.conversion_rates) {
//         if (key != "USD")
//           $("#keycode").append(
//             `   <option value="${data.conversion_rates[key]}">${key}</option>`
//           );
//       }
//     });
// }

let firstpath;
let secondpath;
let firstchange, path1data;
let secondchange, path2data;

$(document).ready(function () {
  firstpath =
    "https://v6.exchangerate-api.com/v6/4d98635d0ac48bb21eca967e/latest/USD";
  secondpath =
    "https://v6.exchangerate-api.com/v6/4d98635d0ac48bb21eca967e/latest/USD";
  path1();
  path2();

  // change api path1
  $("#keycode1").on("change", function () {
    firstchange = $("#keycode1 option:selected").text();
    console.log(firstchange);
    firstpath = `https://v6.exchangerate-api.com/v6/4d98635d0ac48bb21eca967e/latest/${firstchange}`;
    path1();
  });

  // change api path2
  $("#keycode2").on("change", function () {
    secondchange = $("#keycode2 option:selected").text();
    console.log(secondchange);
    secondpath = `https://v6.exchangerate-api.com/v6/4d98635d0ac48bb21eca967e/latest/${secondchange}`;
    path2();
  });

  // InputText1
  $(".input1").keyup(function () {
    let changKey = $("#keycode2 option:selected").text();
    $(".input2").val(
      parseInt(
        Number($(this).val()) * Number(path1data.conversion_rates[changKey])
      )
    );
  });

  // InputText2
  $(".input2").keyup(function () {
    let changKey = $("#keycode1 option:selected").text();
    $(".input1").val(
      parseInt(
        Number($(this).val()) * Number(path2data.conversion_rates[changKey])
      )
    );
  });
});

//append option value
function path1() {
  $(".input1").val("");
  $(".input2").val("");
  fetch(`${firstpath}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      path1data = data;
      $("#keycode1").text("");

      for (const key in path1data.conversion_rates) {
        if (key != "USD")
          $("#keycode1").append(
            `   <option value="${path1data.conversion_rates[key]}">${key}</option>`
          );
      }
    });
}

////append option value
function path2() {
  $(".input1").val("");
  $(".input2").val("");
  fetch(`${secondpath}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      path2data = data;
      $("#keycode2 ").text("");

      for (const key in path2data.conversion_rates) {
        $("#keycode2").append(
          `   <option value="${path2data.conversion_rates[key]}">${key}</option>`
        );
      }
    });
}

//final Tecaher's coding
// let convert1 = "";
// let convert2 = "";

// $(document).ready(function () {
//     initial("USD", "s1");
//     initial("MMK", "s2");

//     $("#i1").keyup(function () {
//         let toCurrency = $("#s2 option:selected").text();
//         $("#i2").val(Number($(this).val() * Number(convert1[toCurrency])))
//     });

//     $("#i2").keyup(function () {
//         let toCurrency = $("#s1 option:selected").text();
//         $("#i1").val(Number($(this).val() * Number(convert2[toCurrency])))
//     });

//     $("#s1").change(function () {
//         selectChange("s1");
//     });

//     $("#s2").change(function () {
//         selectChange("s2");
//     });

// });

// async function initial(ccode, select) {
//    await fetch(https://v6.exchangerate-api.com/v6/a9b038ecfd62e662b6614c1d/latest/${ccode})
//         .then(res => res.json())
//         .then(data => {
//             for (const key in data.conversion_rates) {
//                 (select == "s1") ? convert1 = data.conversion_rates :
//                     convert2 = data.conversion_rates;
//                 $(#${select}).append(
//                     <option value="${data.conversion_rates[key]}">${key}</option>
//                 )
//           }
//         }).catch(error => console.log(error));
// }

// function selectChange(select) {
//     let toCurrency = $(#${select} option:selected).text();
//     $(#${select}).empty();
//     $("#i1").val("");
//     $("#i2").val("");
//     initial(toCurrency, ${select});
// }
