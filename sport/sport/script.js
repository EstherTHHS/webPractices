let seasons;
let teamIdnum;

let image;
let logoName;
let count = 1;
$(document).ready(function () {
  // 2f5b3550-2b9e-11ed-a5cd-a36db34d7fdd
  fetch(
    "https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=7069f190-2b97-11ed-b502-d7e30f68782c&league_id=237"
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      for (const key in result.data) {
        $("#select").append(
          `<option value="${result.data[key].name}">${result.data[key].name}</option>`
        );
      }
    });
  $("#select").change(function () {
    $("#overallScore").empty();
    count = 1;
    let year = $(this).val();
    console.log(year);
    fetch(
      "https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=7069f190-2b97-11ed-b502-d7e30f68782c&league_id=237"
    )
      .then((res) => res.json())
      .then((object1) => {
        console.log(object1);
        for (const key in object1.data) {
          if (year == object1.data[key].name) {
            seasons = object1.data[key].season_id;
            // console.log(seasons);
          }
        }
        final();
      });
  });
});

// final for standing

function final() {
  fetch(
    `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=7069f190-2b97-11ed-b502-d7e30f68782c&season_id=${seasons}`
  )
    .then((res) => res.json())
    .then((object2) => {
      console.log(object2);
      for (const key in object2.data.standings) {
        teamIdnum = object2.data.standings[key].team_id;
        console.log("teamIDnum=" + teamIdnum);
        let gameplay = object2.data.standings[key].overall.games_played;

        let won = object2.data.standings[key].overall.won;
        let draw = object2.data.standings[key].overall.draw;
        let lost = object2.data.standings[key].overall.lost;
        let goals_diff = object2.data.standings[key].overall.goals_diff;
        let goals_scored = object2.data.standings[key].overall.goals_scored;
        let goals_against = object2.data.standings[key].overall.goals_against;

        $("#overallScore").append(
          `<tr >
    
            <td>${count}</td>

            <td># </td>
            <td> # </td>

            <td>${draw} </td> 
             <td id="${count}">${gameplay} </td>
             <td>${goals_against} </td>
             <td>${goals_diff} </td>
             <td>${goals_scored} </td>
             <td>${lost} </td>
             <td>${won} </td>
           
          </tr>
        `
        );
        count++;
        // idLogo();
      }
    });
}

function idLogo() {
  fetch(
    `https://app.sportdataapi.com/api/v1/soccer/teams/${teamIdnum}?apikey=2f5b3550-2b9e-11ed-a5cd-a36db34d7fdd`
  )
    .then((res) => res.json())
    .then((logoID) => {
      console.log(logoID);
      image = logoID.data.logo;
      logoName = logoID.data.name;
      console.log(image, logoName);

      $(`td#${count}`).prepend(
        `<td>${logoName} </td>
       <td> <img src="${image}" alt=""> </td>`
      );
    });
}
