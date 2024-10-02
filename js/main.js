function toggleRows(className) {
  const rows = document.querySelectorAll(`table tr.${className}`);

  rows.forEach((row) => {
    if (row.style.display === "none") {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
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
function generateTableFromData(data) {
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
      table += `<tr ${place > 3 ? "class='toggle1' style='display:none'" : ""}>
      <td>${getOrdinalSuffix(place++)}</td>
      <td><span>${racer.racerNo}</span> ${racer.racerName}</td>
      <td>${racer.finishTime ? unixToHHMM(racer.finishTime) : "DNF"}</td>
    </tr>`;
    }
  });

  // Close the table tag
  table += "</table>";

  // Return the generated HTML table
  return table;
}

// fetch("/results/results-ii.json")
fetch("/results/results-3.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("table-wrapper-1").innerHTML =
      generateTableFromData(data);
  })
  .catch((error) => console.error("Error fetching the data:", error));
