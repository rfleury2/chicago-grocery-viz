function getData() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://data.cityofchicago.org/resource/53t8-wyrc.json";

	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	var jsonData = JSON.parse(xmlhttp.responseText);
	var parsedData = parseData(jsonData)
	return parsedData
};

function parseData(data) {
	var parsed = []
	for(i=0; i<data.length; i++) {
		var store = { 
			lat: data[i]["latitude"], 
			lng: data[i]["longitude"],
			sqft: parseInt(data[i]["square_feet"]) 
		}
		parsed.push(store)
	}
	return parsed
}