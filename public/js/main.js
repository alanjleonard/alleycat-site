function getOrdinalSuffix(place) {
  //it's got to be a number
  if (place === 0) {
    return "-";
  }
  if (place % 10 === 1 && place % 100 !== 11) return place + "st";
  if (place % 10 === 2 && place % 100 !== 12) return place + "nd";
  if (place % 10 === 3 && place % 100 !== 13) return place + "rd";
  return place + "th";
}
const races = {
  1: {
    title: "Steel City Alleycat",
    date: "September 12, 2021",
    finish: "Bandshell",
  },
  2: {
    title: "Steel City Alleycat II",
    date: "May 15, 2022",
    finish: "Gazebo @ Bayfront",
  },
  3: {
    title: "Steel City Alleycat 3",
    date: "October 16, 2022",
    finish: "Victoria Park",
  },
  4: {
    title: "Steel City Alleycat 4",
    date: "September 8, 2024",
    finish: "Eastwood Park",
  },
};

fetch("../results/all-results.json")
  .then((response) => response.json())
  .then((data) => {
    const racers = Object.values(data);

    // Create the table and header row

    let table = "";

    let race = 4;
    racers.forEach((racer) => {
      if (race === racer.sca) {
        --race;
        if (race !== 4) {
          table += "</table>";
        }
        table += `
          <div class='results-header'>
            <h3 id='SCA${racer.sca}'>${races[racer.sca].title}</h3>
            <p class='date'>${races[racer.sca].date}</p>
            <p class='finish-location'>Finish line: ${
              races[racer.sca].finish
            }</p>
          </div>
          <table>
          <tr>
            <th>Place</th>
            <th>Racer Name <span>#</span> </th>
            <th>Time</th>
          </tr>`;
      }
      table += `
      <tr>
        <td>${getOrdinalSuffix(racer.place++)}</td>
        <td><span>${racer.number}</span> ${racer.name}</td>
        <td class='time'>${racer.time === 0 ? "DNF" : racer.time}</td>
      </tr>`;
    });

    // Close the table tag
    table += "</table>";

    // Return the generated HTML table
    document.getElementById(`table-wrapper`).innerHTML = table;
  });
