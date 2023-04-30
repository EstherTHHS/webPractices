let am = true;

let p1 = () =>
    new Promise((resolve, reject) => {
        if (am) {
            let work = {
                wakeup: 7,
                pepareaWork: 8,
                gowork: 9,
                inoffice: 10,
            };
            resolve(work);
        } else {
            reject("nothing  to do");
        }
    });

async function today() {
    let time;
    await p1()
        .then((res) => {
            time = res.wakeup;
            console.log(time);
        })
        .catch((err) => {
            console.log(err);
        });
    console.log("Attended Time is:" + time + " A.M");
}

today();