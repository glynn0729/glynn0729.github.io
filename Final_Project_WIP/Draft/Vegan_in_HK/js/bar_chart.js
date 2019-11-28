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







