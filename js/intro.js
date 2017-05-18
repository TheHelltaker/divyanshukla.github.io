$(document).ready(function () {
    
    $(".intro-header").transition({
        animation : 'fade down',
        duration  : 1100,
        onComplete : function() {
          $(".intro-body").transition({
            animation : 'fade up',
            duration  : 1000,
          });
        }
    });

});

function openFolder(folder){
    
    $("#readme-segment").css("cssText", "display: none !important;");
    $("#readme-content").css("cssText", "display: none !important;");
    
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

//    debugger;
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
    
    $("#table-body").css("cssText", "display: none !important;");    
    $("#table-home").css("cssText", "display: none !important;");
    $('#table-home').css("top", "15%");
    $("#folder-path").css("display", "inline");
    $("#project").html(pathNames[partialName]);
    
    $('#table-home').transition({
        animation : 'fade up',
        duration  : 500,
        onComplete : function() {            
                        
            $('#readme-content').css("top", "25%");
            $('#readme-content').load("partials/projects/" + partialName + ".html");
            $("#readme-content").css("display", "inline");
            
            
            $('#readme-segment').transition({
                animation : 'fade down',
                duration  : 1000
            });
            
        }
    });
           
}

function collapseToHome(folder){
    
    $('.intro-text').transition('fade');
    $("#readme-content").html("");
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