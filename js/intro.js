$(document).ready(function () {
    
    $(".intro-header").transition({
        animation : 'fade down',
        duration  : 1000,
        onComplete : function() {
          $(".intro-body").transition({
            animation : 'fade up',
            duration  : 1000,
          });
        }
    });

});

function openFolder(folder){
    
    $('#f-slash').css("display", "inline");
    
    if(folder == 'parent'){
        $('#folder').html("");
        $('#f-slash').css("display", "none");
    }
    else{
        $('#folder').html(folder);
    }
    
    var path = "partials/" + folder + ".html"
    $('#table-home').load(path);
    
}

function openReadMe(partialName){


    var pathNames = {
        'readme': 'README.md',
        'dart': 'dart',
        'creamery': 'amCreamery',
        'heartRate': 'heartRateAnalytics',
        'sfGuide': 'sfGuide',
        'phobias': 'phobias',
        'dashboard': 'penndotDashboard',        
    }
    
    
    $('.intro-text').transition('fade');
    
    $("#table-home").css("cssText", "display: none !important;");
    $('#table-home').css("top", "15%");
    $("#folder-path").css("display", "inline");
    $("#project").html(pathNames[partialName]);
    
    
    $('#table-home').transition({
        animation : 'fade up',
        duration  : 500,
        onComplete : function() {            

//            $('#readme-content').css("cssText", "position: relative !important;");
             
            
            $('#readme-content').load("partials/projects/" + partialName + ".html");
            $('#readme-content').css("top", "25%");
            
            $('#readme-segment').transition({
                animation : 'fade',
                duration  : 700,
            });
            
        }
    });
    
    $("#table-body").css("cssText", "display: none !important;");
        
}

function collapseToHome(folder){
    
    $('.intro-text').transition('fade');
    $("#readme-segment").css("cssText", "display: none !important;");
    
    if(folder == 'parent'){
        $("#folder").html(""); 
        $('#f-slash').css("display", "none");
    }
    
    else{
        var folder = $("#folder").html();
    }
    
    $("#folder-path").css("display", "none");
    
    var path = "partials/" + folder + ".html"
    $('#table-home').load(path);
    
    $("#table-home").css("cssText", "display: none !important;");
    $('#table-home').transition({
        animation : 'fade down',
        duration  : 700,
        onComplete : function() {   
            $('#table-home').css("position", "fixed");
            $('#table-home').css("top", "40%");
            $("#table-home").css("display", "inline");
        }
    });
    
    
    
}