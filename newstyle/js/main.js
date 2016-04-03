
    $('li.active').click(function(){
        return false;
    });
    
    
    // Generate
    var hoiio="";
   
    hoiio += "    <div class=\"logo\">";
    hoiio += "        <img src=\"img\/direction.svg\">";
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
   