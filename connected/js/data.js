d3.csv("/standards/connected/data/staff.csv", function(error, data) {
    data.forEach(function(d) {
        d3.select("table tbody").append("tr");
        d3.select("table tbody").selectAll("tr").attr("id", d.id);
        
    });
});
/*
pdata = [10,12,6,8,15];
 
selectDIV = d3.select("#example1");

selectDIV.selectAll("p")
 .data(pdata)
 .enter()
 .append("p")
 .text(function(d){return d;});


id avatar	first_name	last_name	phone	role_portal	subscriptons	last_access_portal
d3.select("#"+ d.id).append("td").text(d.first_name + d.last_name);
        d3.select("table tbody tr").append("td").text(d.phone);

*/