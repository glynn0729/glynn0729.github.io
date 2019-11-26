$(document).ready(function(){

     $("button#get_data2").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appk2UBgqcJgKL8qR/make_dish_street_mkt?api_key=keymLj031WF0srBPP";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Street_Market);
                       items.push(value.fields.Shops_Count);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);
  
            
  
           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: '街市名称'},
                  y: {label: '商铺数量'}
                },
                bar: {
                    title: "# of Items by Product Category:",
                },
                color: {
                  pattern: ['#FADBD8', '#aec7e8', '#F9E79F', '#FEA998', '#E9CBEE', '#98df8a', '#6DDDE1', '#9189AB', '#A35238', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f']
              }
            });

      }); // end .getJSON

   }); // end button

}); // document ready


<!-- Resources -->
<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>

<!-- Chart code -->
<script>
am4core.ready(function() {

// Themes begin
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


// Add data
chart.data = [{
  "year": "2016",
  "europe": 2.5,
  "namerica": 2.5,
  "asia": 2.1,
  "lamerica": 0.3,
  "meast": 0.2,
  "africa": 0.1
}, {
  "year": "2017",
  "europe": 2.6,
  "namerica": 2.7,
  "asia": 2.2,
  "lamerica": 0.3,
  "meast": 0.3,
  "africa": 0.1
}, {
  "year": "2018",
  "europe": 2.8,
  "namerica": 2.9,
  "asia": 2.4,
  "lamerica": 0.3,
  "meast": 0.3,
  "africa": 0.1
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;

// Create series
function createSeries(field, name) {
  
  // Set up series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.name = name;
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "year";
  series.sequencedInterpolation = true;
  
  // Make it stacked
  series.stacked = true;
  
  // Configure columns
  series.columns.template.width = am4core.percent(60);
  series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
  
  // Add label
  var labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.text = "{valueY}";
  labelBullet.locationY = 0.5;
  
  return series;
}

createSeries("europe", "Europe");
createSeries("namerica", "North America");
createSeries("asia", "Asia-Pacific");
createSeries("lamerica", "Latin America");
createSeries("meast", "Middle-East");
createSeries("africa", "Africa");

// Legend
chart.legend = new am4charts.Legend();

}); // end am4core.ready()
</script>