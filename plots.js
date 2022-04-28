function init() {
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        // console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
        selector
            .append("option")
            .text(sample)
            .property("value", sample);
        });

        // var PANEL = d3.select("#sample-metadata");
        // PANEL.html("");
        // PANEL.append("h6").text("ID: "+data.metadata[0].id);
        // PANEL.append("h6").text("Ethnicity: "+data.metadata[0].ethnicity);
        // PANEL.append("h6").text("Gender: "+data.metadata[0].gender);
        // PANEL.append("h6").text("Age: "+data.metadata[0].age);
        // PANEL.append("h6").text("Location: "+data.metadata[0].location);
        // PANEL.append("h6").text("BBType: "+data.metadata[0].bbtype);
        // PANEL.append("h6").text("WFREQ: "+data.metadata[0].wfreq);
    })}

function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    // buildCharts(newSample);
}
  
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        // console.log(result);
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        PANEL.append("h6").text("ID: "+result.id);
        PANEL.append("h6").text("Ethnicity: "+result.ethnicity);
        PANEL.append("h6").text("Gender: "+result.gender);
        PANEL.append("h6").text("Age: "+result.age);
        PANEL.append("h6").text("Location: "+result.location);
        PANEL.append("h6").text("BBType: "+result.bbtype);
        PANEL.append("h6").text("WFREQ: "+result.wfreq);
    });
}

  init();