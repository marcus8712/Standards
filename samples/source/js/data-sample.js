function makeTable(data) {
    
    var table = $( ".lists" );
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return table;
}

$(document).ready(function() {
    var data = [["City 1", "City 2", "City 3"], //headers
                ["New York", "LA", "Seattle"], 
                ["Paris", "Milan", "Rome"], 
                ["Pittsburg", "Wichita", "Boise"]]
    var cityTable = makeTable(data);
});


var name = []

Zita Kirts  
Dawn Aslinger  
Pearly Pennington  
Lisabeth Sulzer  
Amiee Summerville  
Marlana Romaine  
Kimber Meyer  
Dorie Hanway  
Louann Proto  
Jan Flavin  
Glen Maddux  
Morton Paradise  
Deanne Follis  
Leontine Koerber  
Charlyn Madigan  
Gerald Chiarello  
Thao Fairchild  
Kathi Cumming  
Jackson Shofner  
Michal Dority  
Kamala Lazar  
Naomi Crooms  
Valarie Hemphill  
Gisele Mak  
Mora Silvia  
Danille Maples  
Kina Arora  
Vanessa Kammer  
Carly Antoine  
Shandi Cadieux  
Lynelle Laforce  
Lorina Chatfield  
Hilma Hostetler  
Miranda Renn  
Sibyl Woolum  
Elinor Stanwood  
Valorie Rodger  
Candra Moree  
Kate Blackledge  
Kanesha Bart  
Refugia Gillian  
Darell Leavens  
Breanne Moone  
Sanda Amendola  
Hye Samons  
Leanora Alexandria  
Carolin Nova  
Christena Amy  
Tamisha Police  
Altagracia Kaczor  





function shoe_types(){
   var shoeObj = {};
   $('[name="number"]').each(function(){
     shoeObj[this.id] = this.value;
   });
   return shoeObj;
}


function insertData (head){
    var header = [];
    var body = [];
    header.push (head);
}

function getTableData(table) {
    var data = [];
    table.find('tr').each(function (rowIndex, r) {
        var cols = [];
        $(this).find('th,td').each(function (colIndex, c) {
            cols.push(c.textContent);
        });
        data.push(cols);
    });
    return data;
}

[Array[3], Array[3], Array[3], Array[3], Array[3]]
  0: Array[3]
    0: "City 1"
    1: "City 2"
    2: "City 3"
  1: Array[3]
    0: "New York"
    1: "LA"
    2: "Seattle"
  2: Array[3]
    0: "Paris"
    1: "Milan"
    2: "Rome"
  3: Array[3]
    0: "Pittsburg"
    1: "Wichita"
    2: "Boise"
  4: Array[3]
    0: "Calgary"
    1: "Ottawa"
    2: "Yellowknife"
    
/*<thead>
        <tr>
            <th>
                <div class="ui checkbox">
                    <input type="checkbox" name="example">
                    <label></label>
                </div>   
            </th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Emails</th>
            <th>SMS</th>  
            <th>Last updated</th>
            <th>Last used</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="ui checkbox">
                  <input type="checkbox" name="example">
                  <label><div class="ui rating" data-max-rating="1"></div></label>
                </div>  
            </td>
            <td>Subscription January 2016</td>
            <td>46</td>
            <td>46/46</td>
            <td>0/46</td>
            <td>Jan 01, 2016</td>
            <td>1 month ago in Hot deals</td>
        </tr>

    </tbody>
    */