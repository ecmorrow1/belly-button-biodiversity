const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData.map(row => row.location.latitude),receivedData.map(row=>row.location.longitude)));
