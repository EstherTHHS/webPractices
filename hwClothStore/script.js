// global variable
let today = new Date();
let discount = false;
let codeArray = [];
//let count=0 is for delete class   to create unique Id
let count = 0;
let priceArray = [];
let qtyArray = [];

let preQuentity;

$(document).ready(function () {
  initial();
  $(".card").click(function () {
    $(".cart").slideDown(1000);
    let alreadyExist = false;
    let img = $(this).find("img").attr("src");
    let pname = $(this).find(".pname").text();
    let code = $(this).find(".code").text();
    let price = $(this).find(".price").text();

    for (let index = 0; index < codeArray.length; index++) {
      if (codeArray[index] == code) {
        alert("Item has alerady exist!!");
        alreadyExist = true;
      }
    }

    if (!alreadyExist) {
      codeArray.push(code);
      let clearPrice = Number(price.replace("Ks ", ""));
      // console.log(clearPrice);
      priceArray.push(clearPrice);
      console.log(priceArray);

      $(".calculateitem").append(`
            <div class="item">
                <img src="${img}" alt="">
                <div class="itemdetail">
                    <p id="pname" class="fw-bold">${pname}</p>
                    <p id="code" class="fw-bold">${code}</p>
                </div>
                <label for="qty">Enter qtyAmt:</label>
                <input type="text" id="${count}" id="qty"  class="quantity" />
                <div id="${count}" class="delete"> <i class="fa-solid fa-trash-can ms-auto mt-3"></i></div>
            </div>`);
      count++;

      calculate();
    }
  });

  $(document).on("click", ".delete", function () {
    console.log(this.id);
    codeArray[this.id] = "";
    // codeArray[0]="";
    priceArray[this.id] = 0;
    $(this).closest(".item").remove();
    // console.log(codeArray);
    calculate();
  });

  $(document).on("focus", ".quantity", function () {
    preQuentity = Number($(this).val());
  });

  $(document).on("blur", ".quantity", function () {
    let quantityamt = Number($(this).val());
    if (quantityamt < 1 || quantityamt > 9) {
      $(this).val(preQuentity);
      alert("Alow 1 to 9 stocks only!!!");
    } else {
      // let index = Number($(this).next(".delete")[0].id);

      qtyArray[this.id] = preQuentity;
      calculate();
    }
  });

  $(document).on("change", "#delivery", function () {
    calculate();
  });
});

function calculate() {
  // total
  let todayDiscountValue = 0.15;
  var itemTotal = 0;
  let grandTotal = 0;
  let todayDisprice = 0;
  let deliAmt = Number($("#delivery").val());

  console.log(qtyArray);
  for (let index = 0; index < priceArray.length; index++) {
    itemTotal += priceArray[index] * qtyArray[index];
  }
  console.log(qtyArray);
  //discount?

  if (discount) {
    todayDisprice = itemTotal * todayDiscountValue;
    $("#discountprice").text(todayDisprice);
  }
  //grand total
  grandTotal = Math.ceil(itemTotal - todayDisprice + deliAmt);
  $("#grand").text(Math.ceil(grandTotal) + "Ks");
}

function initial() {
  $(".cart").hide();
  $("#discounttitle").hide();
  $("#discountprice").hide();
  //checkweekend
  checkWeekend();
}

//weekend check
function checkWeekend() {
  if (today.getDay() == 3 || today.getDay() == 6 || today.getDay() == 4) {
    if (today.getHours() >= 9 && today.getHours() <= 24) {
      $("#discounttitle").show();
      $("#discountprice").show();
      discount = true;
    }
  }
}
