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
  center: [-79.826, 43.259],
  zoom: 11.57,
});
map.scrollZoom.disable();
