//blank
// const styleURL = "mapbox://styles/alnrd/ckqwdc4ey095c17nzcwo96s3u";
// dark
// const styleURL = "mapbox://styles/alnrd/ckr98scy21x8719kygc3o1z29";
// light
const styleURL = "mapbox://styles/alnrd/ckr9915k91xgi19kymon7n47m";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxucmQiLCJhIjoiY2txd2Q0aHVxMG4wZTJvcnV5aGsxNGU3YiJ9.84NpXRrb6azKjQN5zWLCLg";
var map = new mapboxgl.Map({
  container: "map",
  style: styleURL,
  center: [-79.851, 43.256],
  zoom: 11.57,
});
map.scrollZoom.disable();

map.on("load", function () {
  map.addSource("bounds", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-79.8954964, 43.2448432],
            [-79.8904538, 43.2439679],
            [-79.8833513, 43.2454997],
            [-79.8694468, 43.246078],
            [-79.8642969, 43.2463594],
            [-79.8583746, 43.2463125],
            [-79.8505425, 43.2448432],
            [-79.8417664, 43.2423892],
            [-79.8353505, 43.2400757],
            [-79.8315096, 43.2381374],
            [-79.8247504, 43.2348389],
            [-79.8230553, 43.2340885],
            [-79.821682, 43.237387],
            [-79.8194075, 43.2427174],
            [-79.81709, 43.2482818],
            [-79.814558, 43.2544865],
            [-79.8124981, 43.260331],
            [-79.8222613, 43.2628469],
            [-79.8322392, 43.2653782],
            [-79.841938, 43.2678938],
            [-79.849062, 43.2697218],
            [-79.852066, 43.2704405],
            [-79.8544264, 43.2710655],
            [-79.8534822, 43.2734246],
            [-79.8568511, 43.2742839],
            [-79.855628, 43.2767054],
            [-79.8614001, 43.2782051],
            [-79.8621941, 43.2766273],
            [-79.8604989, 43.2761274],
            [-79.8600483, 43.2747213],
            [-79.8650694, 43.2740964],
            [-79.86655, 43.2739246],
            [-79.8678589, 43.2757993],
            [-79.868803, 43.2754869],
            [-79.8680735, 43.2740183],
            [-79.8687172, 43.2731434],
            [-79.8692322, 43.2733934],
            [-79.8697686, 43.2727528],
            [-79.868052, 43.2721279],
            [-79.8682237, 43.2713936],
            [-79.8695111, 43.2706749],
            [-79.8698759, 43.2720185],
            [-79.8713136, 43.2730653],
            [-79.8728371, 43.2732059],
            [-79.8745966, 43.2734715],
            [-79.8761415, 43.2734715],
            [-79.8753691, 43.2720342],
            [-79.8747683, 43.2719873],
            [-79.8749399, 43.2715655],
            [-79.8766994, 43.2717061],
            [-79.8771715, 43.2712061],
            [-79.8719788, 43.2696125],
            [-79.8718071, 43.2690656],
            [-79.8684168, 43.2674407],
            [-79.8686957, 43.2670032],
            [-79.8735881, 43.2681282],
            [-79.8757982, 43.2673782],
            [-79.8809695, 43.2688781],
            [-79.8847032, 43.269925],
            [-79.8860979, 43.2712842],
            [-79.887085, 43.2709874],
            [-79.8862052, 43.2684875],
            [-79.8859048, 43.2677376],
            [-79.8880935, 43.26255],
            [-79.8914409, 43.2547834],
            [-79.8948526, 43.2472972],
            [-79.8955178, 43.2448276],
          ],
        ],
      },
    },
  });

  map.addLayer({
    id: "bounds",
    type: "fill",
    source: "bounds",
    layout: {},
    paint: {
      "fill-color": "#610505",
      "fill-opacity": 0.5,
    },
  });
  // Add a black outline around the polygon.
  map.addLayer({
    id: "outline",
    type: "line",
    source: "bounds",
    layout: {},
    paint: {
      "line-color": "#000",
      "line-width": 3,
    },
  });
});
