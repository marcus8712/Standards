$(document).ready(function() {
    
    /*--------------------
        Component
    ----------------------*/   
    
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  
    
    
    
    // Dropdown
    $('.ui.dropdown').dropdown();
    
    // Message
    $('.message .remove')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
    ;
    
    $('table').tablesort();
    
    //Standard Modal
    $('#demo-modal')
        .modal('attach events', '#demo')
    ;
    
    $('#demo-image-modal')
        .modal('attach events', '#demo-image')
    ;
    
    //Basic Modal
    $('.basic.modal')
        .modal('attach events', '#basic-button')
    ;
    
    //Fullscreen Modal
    $('.fullscreen.modal')
        .modal('attach events', '#fullscreen-button')
    ;
    
    //Small Modal
    $('#small-modal')
        .modal('attach events', '#small-button')
    ;
    
    //Large Modal
    $('.large.modal')
        .modal('attach events', '#large-button')
    ;
    

    //Autofocus Modal
    $('#autofocus-false-modal')
        .modal('setting', 'autofocus', false)
        .modal('attach events', '#autofocus-false')
    ;
 
    $('#autofocus-true-modal')
        .modal('attach events', '#autofocus-true')
    ;
    
    //Couple Modal
    $('.coupled.modal')
      .modal('setting', ' allowMultiple', false)
    ;
    // Click the button to show first modal.
    $('.first.modal')
      .modal('attach events', '.coupled.button')
    ;
    // Click action button in first modal to show second modal.
    $('.second.modal')
      .modal('attach events', '.first.modal .button')
    ;
    
    //Closable Modal
    $('#closable-false-modal')
        .modal('setting', 'closable', false)
        .modal('attach events', '#closable-false')
    ;
    
    //Duration
    $('.duration.modal')
        .modal('setting', 'duration', 100)
        .modal('attach events', '.duration.button')
    ;
    
    //Transition
    $('.selection.dropdown')
      .dropdown({
        onChange: function(value) {
          $('.demo.modal')
            .modal('setting', 'transition', value)
            .modal('show')
          ;
        }
      })
    ;
    
    
    //Event Modal
   
    
    $('#event-modal')
      .modal({
        onVisible    : function(){
          window.alert('Show');
        }, 
        onDeny    : function(){
          window.alert('Wait not yet!');
          return false;
        },
        onApprove : function() {
          window.alert('Approved!');
        }
      })
      .modal('attach events', '#event-button', 'show')
    ;
    
    $('.ui.accordion')
    .accordion()
    ;
    
    
    /*--------------------
        Navigation
    ----------------------*/
    // Active
    $('.present .menu .item')
      .tab({
        context: '.present'
      })
    ;
    
    if(window.location.hash) {
          var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
         var par = $( "#" + hash).parent().parent();
          $(".segment").removeClass("active");
          par.addClass("active");
          var tab = par.data("tab");
       
          $('.menu > a').removeClass("active");
          $('a[data-tab='+tab+']').addClass("active");
    } else{
      $('a[data-tab="first"]').addClass("active");
      $('div[data-tab="first"]').addClass("active"); 
    } 
   
    /*--------------------
        Sidebar
    ----------------------*/
    
    // Generate
    var hoiio="";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Getting Started<\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\">Introduction<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/usage\/prototype\">Prototype<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/usage\/samples\">Samples<\/a><\/li>";
    hoiio += "<\/ul>";


    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Design System<\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/system\/principle\">Principles<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/grid\">Grid Systems<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/color\">Color<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/typography\">Typography<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/system\/icon\">Icon<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/system\/layout\">Layout<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/system\/data\">Data<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/system\/navigation\">Navigation<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/system\/notification\">Notification<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/system\/motion\">Motion<\/a><\/li>";
    hoiio += "<\/ul>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Components<\/li>";
    
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/breadcrumb\">Breadcrumb<\/a><\/li>";
    
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/button\">Button<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/component\/card\">Card<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/component\/divider\">Divider<\/a><\/li>";
    
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/component\/feed\">Feed<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/form\">Form<\/a><\/li>";
    
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/header\">Header<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/image\">Image<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/input\">Input<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/input\">Item<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/label\">Label<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/label\">List<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/menu\">Menu<\/a><\/li>";
    
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/message\">Message<\/a><\/li>";
    
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/progress\">Progress<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/segment\">Segement<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/selection\">Selection<\/a><\/li>";
    
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/step\">Step<\/a><\/li>";
    
    hoiio += "    <li class=\"item\"><a href=\"\/design\/component\/table\">Table<\/a><\/li>";
    
    
    hoiio += "<\/ul>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Plugins<\/li>";
    
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/accordion\">Accordion<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/checkbox\">Checkbox<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/dimmer\">Dimmer<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/dropdown\">Dropdown<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/modal\">Modal<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/tooltip\">Popup<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/search\">Search<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/sidebar\">Sidebar<\/a><\/li>";
    hoiio += "    <li class=\"item\"><a href=\"\/design\/plugin\/tab\">Tab<\/a><\/li>";
    hoiio += "<\/ul>";
    /*
    hoiio += "<\/ul>";
    hoiio += "<ul class=\"category\">";
    hoiio += "    <li class=\"title\">Patterns<\/li>";
    
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/pattern\/empty\">Empty State<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/pattern\/bulk\">Bulk Action<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/pattern\/search\">Search<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/pattern\/setting\">Settings<\/a><\/li>";
    hoiio += "    <li class=\"item line through\"><a href=\"\/design\/pattern\/date\">Date Picker<\/a><\/li>";
    hoiio += "<\/ul>";*/
    

    $(".hoiio-sidebar nav").append(hoiio);
    
    
    // Set Active
    function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    if(x){
        $('a[href$='+x+']').addClass("active");
    }
    else{
        $('a[href$=introduction').addClass("active");
    }
    
    
   

    
   
});


function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}

$(function () {
    
});


/*--------------------
    Loading
----------------------*/    

$(window).load(function() {
    // Animate loader off screen
    $(".hoiio.loading").fadeOut("slow");
    
});


/*--------------------
    Component
----------------------*/    
 $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
});

$(':checkbox').radiocheck();
$(':radio').radiocheck();
$('[data-toggle="switch"]').bootstrapSwitch();
$('.onoffswitch .icons').remove();

