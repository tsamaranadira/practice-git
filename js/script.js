$(document).ready(function(){ 
    /*Hide and show: 
        Used throughout the page to hide further information
        and show when the user click the "See More " or "Read More"*/ 

    $('.ep-click').click(function(event) { 
        event.stopPropagation (); 
        $(".popup-ep").slideToggle("fast"); 

    }); 

    $('.popup-ep').on(".ep-click", function (event){ 
        event.stopPropagation(); 
    }); 

    $('.fd-click').click(function(event) { 
        event.stopPropagation (); 
        $(".popup-fd").slideToggle("fast"); 

    }); 

    $('.popup-fd').on(".fd-click", function (event){ 
        event.stopPropagation(); 
    }); 

    $('.wip-click').click(function(event) { 
        event.stopPropagation (); 
        $(".popup-wip").slideToggle("fast"); 

    }); 

    $('.popup-wip').on(".wip-click", function (event){ 
        event.stopPropagation(); 
    }); 

    $('.refl-click').click(function(event) { 
        event.stopPropagation (); 
        $(".popup-refl").slideToggle("fast"); 

    }); 

    $('.popup-refl').on(".refl-click", function (event){ 
        event.stopPropagation(); 
    }); 







}); 