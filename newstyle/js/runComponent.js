$(document).ready(function() {
    
    /*--------------------
        DROPDOWN
    ----------------------*/ 
    
    // Standard
    $('.ui.dropdown').dropdown();
    
    
    /*--------------------
        PROGRESS
    ----------------------*/ 
    
    // Standard
    var 
    $progress = $('.ui.progress').not('.success, .error, .warning'),
        $buttons = $('.example .increment.button, .example .decrement.button'),
        $stateProgress    = $('.ui.success.progress, .ui.warning.progress, .ui.error.progress');
    
    $stateProgress
      .progress('set progress', 100)
    ;
    
    $progress
      .each(function() {
        $(this)
          .progress({
            showActivity : false,
            random       : {
              min : 5,
              max : 15
            },
            percent      : Math.floor(Math.random() * 60) + 5
          })
        ;
      })
    ;
    
    $buttons.on('click', function() {
        var $progress = $(this).closest('.example').find('.ui.progress')
        ;
        if( $(this).hasClass('increment') ) {
          $progress.progress('increment');
        }
        else {
          $progress.progress('decrement');
        }
      })
    ;
    
    


    
    

    
    /*--------------------
        ACCORDION
    ----------------------*/ 
    
    $('.ui.accordion')
        .accordion()
    ;
    
    
    /*--------------------
        MENU
    ----------------------*/ 
   
    /*--------------------
        MESSAGE
    ----------------------*/ 
    
    // Transition
    $('.message .remove')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
    ;
    
    /*--------------------
        TABLE
    ----------------------*/ 
    
    $('.special.table').tablesort();
    
    
    /*--------------------
        MODAL
    ----------------------*/ 
    
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
    $('#transitions')
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
    

    
    /*--------------------
        Navigation
    ----------------------*/
    
    
    /*
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
    
    */
   
    // Set Active
    function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    
     
    var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    if(x){
        $('a[href$='+x+']').parent().addClass("active");
    }
    else{
        $('a[href$=introduction').addClass("active");
    }
 
    
    
   

    
   
});




 
