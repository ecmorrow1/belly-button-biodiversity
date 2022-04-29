Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

var barTrace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 var barLayout = {
     title: "Luncheon Survey",
     xaxis: {title: "Food Option"},
     yaxis: {title: "Number of Respondents"}
 };
 Plotly.newPlot("plotBar", [barTrace], barLayout);

 bevTrace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
 };

bevLayout = {
    title: "'Bev' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks ordered"}
};

 Plotly.newPlot("plotBev",[bevTrace],bevLayout)

//  Pie Chart
 var pieTrace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var pieData = [pieTrace];
  var pieLayout = {
    title: "'Pie' Chart"
  };
  Plotly.newPlot("plotPie", pieData, pieLayout);

//   Scatter
scatterIn = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

scatterOut = scatterIn.map((num) => {return num**2});

var scatterTrace = {
    x: scatterIn,
    y: scatterOut,
    type: "scatter"
};

var scatterData = [scatterTrace];

var scatterLayout = {
    title: "Scatter Data (parabola)"
};

Plotly.newPlot("scatterPlot",scatterData,scatterLayout)

// plotting city data from array of objects

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map((city) => {return city.City});
var cityPopulation = cities.map((city) => {return city.population})

var cityTrace = {
    x: cityNames,
    y: cityPopulation,
    type: "bar"
};

var cityData = [cityTrace];

var cityLayout = {
    title: "City Population Data",
    xaxis: {Title: "City"},
    yaxis: {Title: "Population"}
}

Plotly.newPlot("cityPlot",cityData,cityLayout)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var filteredWords = words.filter(word => word[0] === 's');
var slicedWords = words.slice(0,3);
console.log(slicedWords);