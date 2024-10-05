function toggleRows(className) {
  const rows = document.querySelectorAll(`table tr.${className}`);

  rows.forEach((row) => {
    if (row.style.display === "none") {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
  // location = "#table-wrapper-1";
}
function getOrdinalSuffix(place) {
  if (place % 10 === 1 && place % 100 !== 11) return place + "st";
  if (place % 10 === 2 && place % 100 !== 12) return place + "nd";
  if (place % 10 === 3 && place % 100 !== 13) return place + "rd";
  return place + "th";
}

function unixToHHMM(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
function getResults(file, raceno) {
  fetch(file)
    .then((response) => response.json())
    .then((data) => {
      const racers = Object.values(data);
      const sortedData = racers
        .filter((racer) => racer.finishTime > 0)
        .sort((a, b) => a.finishTime - b.finishTime)
        .concat(racers.filter((racer) => racer.finishTime === 0));

      // Create the table and header row
      let table = `<table><tr>
    <th>Place</th>
    <th>Racer Name / #</th>
    <th>Time</th>
  </tr>`;

      // Populate table rows
      let place = 1;
      sortedData.forEach((racer) => {
        if (racer.finishTime > 0) {
          table += `<tr ${
            place > 3 ? "class='toggle1' style='display:none'" : ""
          }>
      <td>${getOrdinalSuffix(place++)}</td>
      <td><span>${racer.racerNo}</span> ${racer.racerName}</td>
      <td>${racer.finishTime ? unixToHHMM(racer.finishTime) : "DNF"}</td>
    </tr>`;
        }
      });

      // Close the table tag
      table += "</table>";

      // Return the generated HTML table
      // document.getElementById(`table-wrapper-${raceno}`).innerHTML = table;
      // console.log(table);
    });
}

getResults("/results/results.json", 1);
getResults("/results/results-ii.json", 2);
getResults("/results/results-3.json", 3);
// getResults("/results/results-4.json", 4);

function nav(href) {
  let template = href.split("/")[1];
  if (!template) {
    template = "home";
    location = "#/home";
  }
  console.log(template);
  //load hbs
  fetch(`../templates/${template}.hbs`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`error ${response.status}`);
      }
      return response.text();
    })
    .then((fileContent) => {
      const template = Handlebars.compile(fileContent);
      const html = template({});
      document.getElementById("content").innerHTML = html;
    });
}
// all that's done, scroll up to the tippy top
window.scrollTo(0, 0);
// handle the navigation
$(document).ready(function () {
  nav(window.location.hash);
  // MAGIC!!
  window.onpopstate = function () {
    nav(window.location.hash);
  };
  history.pushState({}, "");
  // do the nav thing
  // $("nav a").click(function () {
  //   $("nav a").removeClass("active");
  //   $(this).addClass("active");
  // });
});
