
d3.csv("/xanhchi/data/xanhchi.csv", function(error, data) {
    data.forEach(function(d) {
         d3.select("body").append("div").text(d.productID);
    });
});