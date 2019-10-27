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
        var airtable_read_endpoint = "https://api.airtable.com/v0/appKEBtw8s7UWprDl/Alibaba?api_key=keymLj031WF0srBPP";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Occupation);
                       items.push(value.fields.Industry);
                       items.push(value.fields.Firm);
                       items.push(value.fields.Pic);
                       items.push(value.fields.Location);
                       items.push(value.fields.Category);
                       items.push(value.fields.Orientation);
                       items.push(value.fields.Graduation_Time_Request);
                       items.push(value.fields.Interview_Location);
                       items.push(value.fields.More_Details);
              
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Occupation",
                       defaultContent:""},
                     { title: "Industry",
                         defaultContent:"" },
                     { title: "Firm",
                       defaultContent:"" },
                     { title: "Pic",
                       defaultContent:""},
                     { title: "Location",
                         defaultContent:""},
                     { title: "Category",
                       defaultContent:""},
                     { title: "Orientation",
                       defaultContent:""},
                       { title: "Graduation_Time_Request",
                       defaultContent:""},
                     { title: "Interview_Location",
                         defaultContent:""},
                     { title: "More_Details",
                       defaultContent:""},
                  
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready