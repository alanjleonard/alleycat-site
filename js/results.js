// results stuff
function getGetOrdinal(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
function findPlace(fTime, data) {
  const times = [];
  $.each(data, function (racer, d) {
    if (d.finishTime > 0) {
      times.push(d.finishTime);
    }
  });
  times.sort();
  let place = "";
  switch (times.indexOf(fTime) + 1) {
    case 1:
      place = { text: "FIRST", class: "first" };
      break;
    case 2:
      place = { text: "SECOND", class: "second" };
      break;
    case 3:
      place = { text: "THIRD", class: "third" };
      break;
    case times.length:
      place = { text: "DEAD FUCKING LAST", class: "dfl" };
      break;
    default:
      place = {
        text: `${times.indexOf(fTime) + 1}<sup>${getGetOrdinal(
          times.indexOf(fTime) + 1
        )}</sup>`,
        class: "",
      };
  }
  return place;
}
function yourTime(start, end) {
  var d = end - start;
  d = Number(d) / 1000;
  var h = "0" + Math.floor(d / 3600);
  var m = "0" + Math.floor((d % 3600) / 60);
  var s = "0" + Math.floor((d % 3600) % 60);
  var duration = h + ":" + m.substr(-2) + ":" + s.substr(-2);

  var date = new Date(end);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var mili = "0" + date.getMilliseconds();

  var endTime =
    hours +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2) +
    "." +
    mili.substr(-2);

  html = endTime;
  html += "<br/>" + duration;
  return endTime;
}
function results(data) {
  let tbody = "";
  let racerNo = 0;
  let racers = [];
  // this is going to be easier if it's an array
  $.each(data, function (k, v) {
    racers.push(v);
  });
  // get the places in here
  dataWithRaceNumbers = racers.map(function (data, key) {
    racerNo++;
    if (racerNo === 15) {
      data.racerNo = "Jamie Philp";
    } else if (racerNo === 22) {
      data.racerNo = "Chris B.";
    } else if (racerNo === 19) {
      data.racerNo = "Tom";
    } else {
      data.racerNo = racerNo;
    }
    return data;
  });
  // sort racers by finish time;
  dataWithRaceNumbers.sort(function (a, b) {
    return a.finishTime - b.finishTime;
  });
  $.each(dataWithRaceNumbers, function (racer, cpr) {
    if (cpr.finishTime) {
      tbody += `<tr>
                <td>${cpr.racerNo}</td>`;
      if (cpr["finish"]) {
        const place = findPlace(cpr["finishTime"], data);
        tbody += `<td class='${place.class} done'>${place.text}</td>
                <td class='done'>${yourTime(
                  cpr.startTime,
                  cpr.finishTime
                )} </td>`;
      } else {
        tbody += `<td colspan='2' class='done'>DNF</td>`;
      }
      tbody += `</tr>`;
    }
  });
  $("table.results tbody").html(tbody);
}
//do the results
$.get("results.json", function (data) {
  results(data.racers);
});
