function unixToHHMM(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function jsonToTable(jsonData) {
  let table = '<table border="1"><thead><tr>';
  table += `<th>Place</th>`;
  table += `<th>Racer Name</th>`;
  table += `<th>Racer #</th>`;
  table += `<th>Finish Time of day</th>`;
  table += "</tr></thead><tbody>";

  // Create table rows
  let i = 0;
  for (let key in jsonData) {
    table += `<tr>`;
    table += `<td>${++i}</td>`;
    table += `<td>${jsonData[key]["racerName"]}</td>`;
    table += `<td>${jsonData[key]["racerNo"]}</td>`;
    if (jsonData[key]["finishTime"] != 0) {
      table += `<td>${unixToHHMM(jsonData[key]["finishTime"])}</td>`;
    } else {
      table += `<td>dnf</td>`;
    }
    table += `</tr>`;
  }

  table += "</tbody></table>";
  return table;
}
const data = {
  "-NEWWVLZYkrwaSl4oLi5": {
    circle: false,
    diamond: false,
    finish: false,
    finishTime: 0,
    racerName: "Motorhead",
    racerNo: 4,
    square: false,
    startTime: 1665936000419,
    triangle: false,
  },
  "-NEWWVMROlUgMY4T74lf": {
    circle: true,
    diamond: true,
    finish: true,
    finishTime: 1665939352135,
    racerName: "The Biking Lawyer",
    racerNo: 1,
    square: true,
    startTime: 1665936002544,
    triangle: true,
  },
  "-NEWWVNEeo_PxQrGjY_U": {
    circle: true,
    diamond: true,
    finish: true,
    finishTime: 1665939255244,
    racerName: "Craig, from the grave",
    racerNo: 7,
    square: true,
    startTime: 1665936000526,
    triangle: true,
  },
  "-NEWWVRIVcTsvyGk-EIC": {
    circle: true,
    diamond: true,
    finish: true,
    finishTime: 1665939943633,
    racerName: "Katherine, Brenden, Jake",
    racerNo: 2,
    square: true,
    startTime: 1665936001829,
    triangle: true,
  },
};
// document.body.innerHTML = jsonToTable(data);
