$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });


    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appfV5TWWBtgUBxTb/RestaurantCafe?api_key=keymLj031WF0srBPP";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Name);
                       items.push(value.fields.Picture2);
                       items.push(value.fields.Category);
                       items.push(value.fields.Type);
                       items.push(value.fields.Top_Choice);
                       items.push(value.fields.Payment);
                       items.push(value.fields.Expense);
                       items.push(value.fields.Opening_Hours);
                       items.push(value.fields.District);
                       items.push(value.fields.Location);
                       items.push(value.fields.Transportation);
                       items.push(value.fields.Homepage);
                       items.push(value.fields.Contact);
                       items.push(value.fields.Surrounddings);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);



             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Name",
                       defaultContent:""},
                     { title: "Picture2",
                         defaultContent:"" },
                     { title: "Category",
                       defaultContent:"" },
                     { title: "Type",
                       defaultContent:""},
                     { title: "Top_Choice",
                         defaultContent:""},
                     { title: "Payment",
                       defaultContent:""},
                     { title: "Expense",
                       defaultContent:""},
                       { title: "Opening_Hours",
                       defaultContent:""},
                     { title: "District",
                         defaultContent:"" },
                     { title: "Location",
                       defaultContent:"" },
                     { title: "Transportation",
                       defaultContent:""},
                     { title: "Homepage",
                         defaultContent:""},
                     { title: "Contact",
                       defaultContent:""},
                     { title: "Surrounddings",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button






     
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
