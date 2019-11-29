$(document).ready(function(){

     $("button#recurve_women").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Recurve%20Women?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.Ranking);
                      table1_items.push(value.fields.Name);
                      table1_items.push(value.fields.Club);
                      table1_items.push(value.fields.Oct);
                      table1_items.push(value.fields.Average_Score);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "Ranking",
                      defaultContent:""},
                    { title: "Name",
                        defaultContent:"" },
                    { title: "Club",
                      defaultContent:"" },
                    { title: "Latest Score",
                      defaultContent:""},
                    { title: "Average Score",
                      defaultContent:""},
                ]
            });
            }); // end .getJSON

            var table5_items = [];
            var i = 0;
            var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Recurve%20Women?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
            var table5_dataSet = [];
            $.getJSON(airtable_read_endpoint, function(result) {
                   $.each(result.records, function(key,value) {
                       table5_items = [];
                           table5_items.push(value.fields.Name);
                           table5_items.push(value.fields.Jan);
                           table5_items.push(value.fields.May);
                           table5_items.push(value.fields.Jun);
                           table5_items.push(value.fields.Sep);
                           table5_items.push(value.fields.Oct);
                           table5_dataSet.push(table5_items);
                           console.log(table5_items);
                    }); // end .each
                    console.log(table5_dataSet);

                 $('#table5').DataTable( {
                     data: table5_dataSet,
                     retrieve: true,
                     columns: [
                         { title: "Name",
                           defaultContent:""},
                         { title: "Jan",
                             defaultContent:"" },
                         { title: "May",
                           defaultContent:"" },
                         { title: "Jun",
                           defaultContent:""},
                         { title: "Sep",
                           defaultContent:""},
                         { title: "Oct",
                           defaultContent:""},
                     ]
                 });

            var contents = document.getElementById('title1').innerHTML="The Latest Five Months Records";

            var chart = c3.generate({
                     bindto: '#chart_rw',
                     data: {
                         columns: table5_dataSet,
                         type : 'line'
                       },
                       axis: {
                         x: {label: 'Time'},
                         y: {label: 'Score'}
                       },
                       bar: {
                         title: "The Latest Five Months Records",
                       }
                     });
                   });
                 }); // end .button

       $("button#recurve_men").click(function() {
         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Recurve%20Men?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Ranking);
                        table2_items.push(value.fields.Name);
                        table2_items.push(value.fields.Club);
                        table2_items.push(value.fields.Oct);
                        table2_items.push(value.fields.Average_Score);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);

              $('#table2').DataTable( {
                  data: table2_dataSet,
                  retrieve: true,
                  columns: [
                      { title: "Ranking",
                        defaultContent:""},
                      { title: "Name",
                          defaultContent:"" },
                      { title: "Club",
                        defaultContent:"" },
                      { title: "Latest Score",
                        defaultContent:""},
                      { title: "Average Score",
                        defaultContent:""},
                  ]
              } );
         }); // end .getJSON

         var table6_items = [];
         var i = 0;
         var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Recurve%20Men?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
         var table6_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table6_items = [];
                        table6_items.push(value.fields.Name);
                        table6_items.push(value.fields.Jan);
                        table6_items.push(value.fields.May);
                        table6_items.push(value.fields.Jun);
                        table6_items.push(value.fields.Sep);
                        table6_items.push(value.fields.Oct);
                        table6_dataSet.push(table6_items);
                        console.log(table6_items);
                 }); // end .each
                 console.log(table6_dataSet);

              $('#table6').DataTable( {
                  data: table6_dataSet,
                  retrieve: true,
                  columns: [
                      { title: "Name",
                        defaultContent:""},
                      { title: "Jan",
                          defaultContent:"" },
                      { title: "May",
                        defaultContent:"" },
                      { title: "Jun",
                        defaultContent:""},
                      { title: "Sep",
                        defaultContent:""},
                      { title: "Oct",
                        defaultContent:""},
                  ]
              });

         var contents = document.getElementById('title2').innerHTML="The Latest Five Months Records";

         var chart = c3.generate({
                  bindto: '#chart_rm',
                  data: {
                      columns: table6_dataSet,
                      type : 'line'
                    },
                    axis: {
                      x: {label: 'Time'},
                      y: {label: 'Score'}
                    },
                    bar: {
                      title: "The Latest Five Months Records",
                    }
                  });
                });
              }); // end .button


     $("button#compound_women").click(function() {
       var table3_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Compound%20Women?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
       var table3_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table3_items = [];
                      table3_items.push(value.fields.Ranking);
                      table3_items.push(value.fields.Name);
                      table3_items.push(value.fields.Club);
                      table3_items.push(value.fields.Oct);
                      table3_items.push(value.fields.Average_Score);
                      table3_dataSet.push(table3_items);
                      console.log(table3_items);
               }); // end .each
               console.log(table3_dataSet);

            $('#table3').DataTable( {
                data: table3_dataSet,
                retrieve: true,
                columns: [
                    { title: "Ranking",
                      defaultContent:""},
                    { title: "Name",
                        defaultContent:"" },
                    { title: "Club",
                      defaultContent:"" },
                    { title: "Latest Score",
                      defaultContent:""},
                    { title: "Average Score",
                      defaultContent:""},
                ]
            });
       }); // end .getJSON

       var table7_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Compound%20Women?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
       var table7_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table7_items = [];
                      table7_items.push(value.fields.Name);
                      table7_items.push(value.fields.Jan);
                      table7_items.push(value.fields.May);
                      table7_items.push(value.fields.Jun);
                      table7_items.push(value.fields.Sep);
                      table7_items.push(value.fields.Oct);
                      table7_dataSet.push(table7_items);
                      console.log(table7_items);
               }); // end .each
               console.log(table7_dataSet);

            $('#table7').DataTable( {
                data: table7_dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Jan",
                        defaultContent:"" },
                    { title: "May",
                      defaultContent:"" },
                    { title: "Jun",
                      defaultContent:""},
                    { title: "Sep",
                      defaultContent:""},
                    { title: "Oct",
                      defaultContent:""},
                ]
            });

       var contents = document.getElementById('title3').innerHTML="The Latest Five Months Records";

       var chart = c3.generate({
                bindto: '#chart_cw',
                data: {
                    columns: table7_dataSet,
                    type : 'line'
                  },
                  axis: {
                    x: {label: 'Time'},
                    y: {label: 'Score'}
                  },
                  bar: {
                    title: "The Latest Five Months Records",
                  }
                });
              });
            }); // end .button

     $("button#compound_men").click(function() {
       var table4_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Compound%20Men?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
       var table4_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table4_items = [];
                      table4_items.push(value.fields.Ranking);
                      table4_items.push(value.fields.Name);
                      table4_items.push(value.fields.Club);
                      table4_items.push(value.fields.Oct);
                      table4_items.push(value.fields.Average_Score);
                      table4_dataSet.push(table4_items);
                      console.log(table4_items);
               }); // end .each
               console.log(table4_dataSet);

            $('#table4').DataTable( {
                data: table4_dataSet,
                retrieve: true,
                columns: [
                    { title: "Ranking",
                      defaultContent:""},
                    { title: "Name",
                        defaultContent:"" },
                    { title: "Club",
                      defaultContent:"" },
                    { title: "Latest Score",
                      defaultContent:""},
                    { title: "Average Score",
                      defaultContent:""},
                ]
            });
       }); // end .getJSON

       var table8_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Compound%20Men?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
       var table8_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table8_items = [];
                      table8_items.push(value.fields.Name);
                      table8_items.push(value.fields.Jan);
                      table8_items.push(value.fields.May);
                      table8_items.push(value.fields.Jun);
                      table8_items.push(value.fields.Sep);
                      table8_items.push(value.fields.Oct);
                      table8_dataSet.push(table8_items);
                      console.log(table8_items);
               }); // end .each
               console.log(table8_dataSet);

            $('#table8').DataTable( {
                data: table8_dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Jan",
                        defaultContent:"" },
                    { title: "May",
                      defaultContent:"" },
                    { title: "Jun",
                      defaultContent:""},
                    { title: "Sep",
                      defaultContent:""},
                    { title: "Oct",
                      defaultContent:""},
                ]
            });

       var contents = document.getElementById('title4').innerHTML="The Latest Five Months Records";

       var chart = c3.generate({
                bindto: '#chart_cm',
                data: {
                    columns: table8_dataSet,
                    type : 'line'
                  },
                  axis: {
                    x: {label: 'Time'},
                    y: {label: 'Score'}
                  },
                  bar: {
                    title: "The Latest Five Months Records",
                  }
                });
              });
            }); // end .button

    $("button#recurve_women").click(function(){
        $("#rw").slideToggle();
    });

    $("button#recurve_men").click(function(){
        $("#rm").slideToggle();
    });

    $("button#compound_women").click(function(){
        $("#cw").slideToggle();
    });

    $("button#compound_men").click(function(){
        $("#cm").slideToggle();
    });

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {
}); // document ready