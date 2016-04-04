
    $('li.active').click(function(){
        return false;
    });
    
    
    // Generate
    var hoiio="";
    hoiio += "    <ul class=\"leftMenu menu\">";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"intro\">Intro<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"component\grid\">Structure<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"color\">Color<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"font\">Fonts<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"components\">Components<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
    hoiio += "    <ul class=\"rightMenu menu\">";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"patterns\">App Patterns<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"state\">States<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"samples\">Samples<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"download\">Download<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
   
    $(".navbar-content").append(hoiio);
   