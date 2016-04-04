
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
    hoiio += "            <a class=\"links\" href=\"structure\/grid\">Structure<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"color\">Color<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"font\/typo\">Fonts<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"component\">Components<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
    hoiio += "    <ul class=\"rightMenu menu\">";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"pattern\pattern\">App Patterns<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"state\state\">States<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"sample\sample\">Samples<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"download\download\">Download<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
   
    $(".navbar-content").append(hoiio);
   