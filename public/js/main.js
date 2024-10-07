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
    about: "something something",
  },
  2: {
    title: "Steel City Alleycat II",
    date: "May 15, 2022",
    about: "something something",
  },
  3: {
    title: "Steel City Alleycat 3",
    date: "October 16, 2022",
    about: "something something",
  },
  4: {
    title: "Steel City Alleycat 4",
    date: "September 8, 2024",
    about: "something something",
  },
};
fetch("../results/all-results.json")
  .then((response) => response.json())
  .then((data) => {
    const racers = Object.values(data);

    // Create the table and header row

    let table = "";

    let race = 1;
    racers.forEach((racer) => {
      if (race === racer.sca) {
        race++;
        console.log(`show header ${racer.sca}`);
        if (race !== 1) {
          table += "</table>";
        }
        table += `
          <div class='results-header'>
            <h3>${races[racer.sca].title}</h3>
            <p>${races[racer.sca].date}</p>
            <p class='aboutRace'>${races[racer.sca].about}</p>
          </div>
          <table>
          <tr>
            <th>Place</th>
            <th>Racer Name / #</th>
            <th>Time</th>
          </tr>`;
      }
      table += `
      <tr>
        <td>${getOrdinalSuffix(racer.place++)}</td>
        <td><span>${racer.number}</span> ${racer.name}</td>
        <td>${racer.time === 0 ? "DNF" : racer.time}</td>
      </tr>`;
    });

    // Close the table tag
    table += "</table>";

    // Return the generated HTML table
    document.getElementById(`table-wrapper`).innerHTML = table;
  });
