d3.csv("/standards/connected/data/staff.csv", function(error, data) {
    
   
    
    data.forEach(function(d) {
       d3.select("table tbody").append("tr").attr("id", 'staff' + d.id);
        
        
    });
})
/*

var dataset = [d.avatar,d.phone,d.role_portal,d.subscriptions,d.last_access_portal];
        d3.select("table tbody").append("tr").attr("id", 'staff' + d.id);
        d3.select(("#staff" + d.id),function()
            .append("td").text(d.first_name)
            .enter()
            .append("td").text(d.last_name);
id avatar	first_name	last_name	phone	role_portal	subscriptons	last_access_portal
d3.select("#"+ d.id).append("td").text(d.first_name + d.last_name);
        d3.select("table tbody tr").append("td").text(d.phone);

*/