
    $('a.active').click(function(){
        return false;
    });
    
     
    $("#create-new-btn").click(function() {
        $(this).each(function(){
            $('#form-content').removeClass();			$('#form-content').addClass("slideLeft");
            $('#create-new').show();
            $('#login').hide();
            $('#create-new-card').hide(); 
            $('#login-card').show();

        });
    });

    $("#login-btn").click(function() {
        $(this).each(function(){
            $('#form-content').removeClass();			$('#form-content').addClass("slideRight");
            $('#create-new').hide();
            $('#login').show();
            $('#create-new-card').show(); 
            $('#login-card').hide();

        });
    });
    
    
    // Generate
    var hoiio="";
    hoiio += "    <ul class=\"leftMenu menu\">";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a href=\"\/standards\/connected\/intro\">Intro<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a href=\"\/standards\/connected\/structure\/grid\">Structure<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a  href=\"\/standards\/connected\/color\">Color<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a  href=\"\/standards\/connected\/font\/typo\">Fonts<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a href=\"\/standards\/connected\/component\/component\">Components<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
    hoiio += "    <ul class=\"rightMenu menu\">";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a href=\"\/standards\/connected\/pattern\/pattern\">App Patterns<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a href=\"\/standards\/connected\/state\/state\">States<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a href=\"\/standards\/connected\/sample\/sample\">Samples<\/a>";
    hoiio += "        <\/li>";
    hoiio += "        <li class=\"item\">";
    hoiio += "            <a href=\"\/standards\/connected\/download\/download\">Download<\/a>";
    hoiio += "        <\/li>";
    hoiio += "    <\/ul>";
   
    $(".navbar-content").append(hoiio);
   

