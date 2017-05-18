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
    console.log(folder);
    var path = "partials/" + folder + ".html"
    $('#table-home').load(path);
}

function openReadMe(){
    $('.intro-text').transition('fade');
    
    $('#table-home').css("top", "15%")
    $('#table-home').css("display", "none")
    
    $('#table-home').transition({
        animation : 'fade up',
        duration  : 1000,
        onComplete : function() {
//          $('#table-home').css("margin-top", "15%")
            
            $('#table-home').css("position", "relative")
            
            var rm = document.createElement("div");
            rm.id = "readMe";
//            rm.className = "ui top attached segment";
            $('.github').append(rm);
            $("#readMe").load("partials/readme.html");
        }
    });
    
    $('#table-body').css("display", "none")
    
    
}