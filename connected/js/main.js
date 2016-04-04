
    $('li.active').click(function(){
        return false;
    });
    
    
    // Generate
    var hoiio="";
    hoiio += "    <ul class=\"leftMenu menu\">";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/intro\">Intro<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/structure\/grid\">Structure<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/color\">Color<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/font\/typo\">Fonts<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/component\/component\">Components<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
    hoiio += "    <ul class=\"rightMenu menu\">";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/pattern\/pattern\">App Patterns<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/state\/state\">States<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/sample\/sample\">Samples<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a class=\"links\" href=\"\/standards\/connected\/download\/download\">Download<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
   
    $(".navbar-content").append(hoiio);
   

