function realTime() {
    let today = new Date();
    let ampm = today.getHours() >= 12 ? "PM" : "AM";
    let hour =
        today.getHours().toString().length == 2 ?
        today.getHours() :
        "0" + today.getHours();
    let minu =
        today.getMinutes().toString().length == 2 ?
        today.getMinutes() :
        "0" + today.getMinutes();
    let sec =
        today.getSeconds().toString().length == 2 ?
        today.getSeconds() :
        "0" + today.getSeconds();

    document.getElementById("clock").innerHTML = `${hour}:${minu}:${sec} ${ampm}`;
}

setInterval(() => {
    realTime();
}, 1000);