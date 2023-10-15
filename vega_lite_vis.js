var vg_1 = "map.json";
var vg_2 = "grouped-bar-chart.json";
var vg_3 = "line-chart.json";
vegaEmbed("#map-left", vg_1,{renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#barchart", vg_2,{renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#linechart", vg_3,{renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
