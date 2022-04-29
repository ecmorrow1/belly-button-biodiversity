// console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
var topFiveCities = sortedCities.slice(0,5);
console.log(sortedCities);

// var topFiveCityNames = cityGrowths.map(city => city.City).slice(0,5);
// var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016)).slice(0,5);
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

var citiesSortedByPopulation = cityGrowths.sort((a,b) => b.population-a.population);

var topSevenCityNames = citiesSortedByPopulation.map(city=> city.City).slice(0,7);
var topSevenCityPopulations = citiesSortedByPopulation.map(city => parseInt(city.population)).slice(0,7);
// topSevenCityPopulations = topSevenCityPopulations.sort((a,b) => b-a);
console.log(topSevenCityNames);
var trace2 = {
    x: topSevenCityNames,
    y: topSevenCityPopulations,
    type: "bar"
};

var data2 = [trace2];
var layout2 = {
    title: "Largest City Populations",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};
Plotly.newPlot("bar-plot2", data2, layout2);