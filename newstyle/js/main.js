$(document).ready(function() {
    
    $('li.active').click(function(){
        return false;
    });
    
    
    // Generate
    var hoiio="";
   
    hoiio += "    <div class=\"logo\">";
    hoiio += "        <img src=\"img\/square.svg\">";
    hoiio += "        <img src=\"img\/tri.svg\">";
    hoiio += "        <img src=\"img\/round.svg\">";
    hoiio += "    <\/div>";
    hoiio += "    <ul class=\"leftMenu menu\">";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"about\">About<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"grid\">Structure<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"color\">Color<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"font\">Fonts<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"components.html\">Components<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
   
    $(".navbar").append(hoiio);
    
    var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    if(x){
        $('a[href$='+x+']').parent().addClass("active");
    }
    else{
        $('a[href$=introduction').addClass("active");
    }
 
});
