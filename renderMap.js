// map center
var myLatlng = new google.maps.LatLng(41.83, -87.68);
// map options,
var myOptions = {
  zoom: 11,
  center: myLatlng
};
// standard map
map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
// heatmap layer
heatmap = new HeatmapOverlay(map, 
  {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.008,
    "maxOpacity": 0.4, 
    // scales the radius based on map zoom
    "scaleRadius": true, 
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries 
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // gradient: {
    //     // enter n keys between 0 and 1 here
    //     // for gradient color customization
    //     '.5': 'blue',
    //     '.8': 'red',
    //     '.95': 'white'
    //     },
    blur: 1,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'sqft'
  }
);

var groceryStoreData = getData();
var testData = {
  max: 500000,
  data: groceryStoreData
};

heatmap.setData(testData);
