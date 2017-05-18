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
    var path = "partials/" + folder + ".html"
    $('#table-home').load(path);
}

function openReadMe(){
    $('.intro-text').transition('fade');
    
    $("#table-home").css("cssText", "display: none !important;");
    $('#table-home').css("top", "15%");
    
    $('#table-home').transition({
        animation : 'fade up',
        duration  : 1000,
        onComplete : function() {            
            $('#table-home').css("position", "relative");
            
            var rm = document.createElement("div");
            rm.id = "readMe";
            $('.github').append(rm);
            $("#readMe").load("partials/readme.html");
            
            $("#folder-path").css("display", "inline");
        }
    });
    
    $('#table-body').css("display", "none")
    
}

function collapseToHome(folder){
    
    $('.intro-text').transition('fade');
    $('#readMe').css("display", "none");
    $("#folder-path").css("display", "none");
    
    var path = "partials/" + folder + ".html"
    $('#table-home').load(path);
    
    $("#table-home").css("cssText", "display: none !important;");
    $('#table-home').transition({
        animation : 'fade down',
        duration  : 1000,
        onComplete : function() {   
            $('#table-home').css("position", "fixed");
            $('#table-home').css("top", "40%");
            $("#table-home").css("display", "inline");
        }
    });
    
    
    
}