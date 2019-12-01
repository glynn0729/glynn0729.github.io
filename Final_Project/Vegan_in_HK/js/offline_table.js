 $(document).ready(function(){
    $("button#street_mkt_getjson").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appk2UBgqcJgKL8qR/buy_offline?api_key=keymLj031WF0srBPP";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.name);
                       items.push(value.fields.dis);
                       items.push(value.fields.address);
                       items.push(value.fields.time);
                       items.push(value.fields.tel);
                       items.push(value.fields.fruit_vege_ttl);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table_street_mkt_getjson').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "街市",
                       defaultContent:""},
                     { title: "分区",
                       defaultContent:"" },
                     { title: "街市地址",
                       defaultContent:""},
                     { title: "营业时间",
                         defaultContent:""},
                     { title: "联系方式",
                       defaultContent:""},
                     { title: "蔬果商铺总数",
                         defaultContent:""},                  
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready