$(".face-button").click(function() {
	$(".face-reply").text("you tend to be more more impulsive, spontaneous, and are less likely to take things seriously."); 
     $(".face-reply").css("background-color", "olive");
    $(".girl-reply").hide();
});

$(".girl-button").dblclick(function() {
    $(".girl-reply").show();
	$(".girl-reply").text("you are indecisive and are afraid to take risks.");
    $(".girl-reply").css("background-color", "darkblue");
    $(".face-reply").hide();
   
});

$(".bunny-button").click(function() {
	$(".bunny-reply").text("you are more likely to be more likely to be vulnerable and sensitive."); 
    $(".bunny-reply").css("background-color", "olive");
    $(".duck-reply").hide();
    $(".girl-reply").hide();
    $(".face-reply").hide();
    $(".face-button").hide();
     $(".girl-reply").hide();
    $(".girl-button").hide();
});
	$(".duck-button").dblclick(function() {
         $(".duck-reply").show();
	$(".duck-reply").text("you tend to build walls around you emotions and don’t give in so easily.");
    $(".duck-reply").css("background-color", "darkblue");
        $(".bunny-reply").hide();
         $(".face-reply").hide();
    $(".face-button").hide();
     $(".girl-reply").hide();
    $(".girl-button").hide();
});

$(".faces-button").click(function() {
	$(".faces-reply").text("you are a more extroverted and outgoing person."); 
    $(".faces-reply").css("background-color", "olive");
    $(".pillars-reply").hide();
     $(".duck-reply").hide();
    $(".duck-button").hide();
     $(".bunny-reply").hide();
    $(".bunny-button").hide();
});
	$(".pillars-button").dblclick(function() {
         $(".pillars-reply").show();
	$(".pillars-reply").text("you are more introverted and tend to be a bit more shy.");
        $(".pillars-reply").css("background-color", "darkblue");
        $(".faces-reply").hide();
         $(".duck-reply").hide();
    $(".duck-button").hide();
     $(".bunny-reply").hide();
    $(".bunny-button").hide();
});

$(".young-button").click(function() {
	$(".young-reply").text("you are scared to grow older and afraid of change disrupting your life."); 
    $(".young-reply").css("background-color", "olive");
    $(".old-reply").hide();
     $(".faces-reply").hide();
    $(".faces-button").hide();
     $(".pillars-reply").hide();
    $(".pillars-button").hide();
});
	$(".old-button").dblclick(function() {
         $(".old-reply").show();
	$(".old-reply").text("you are accepting of change and have an easier time when faced with problems.");
        $(".old-reply").css("background-color", "darkblue");
        $(".young-reply").hide();
         $(".faces-reply").hide();
    $(".faces-button").hide();
     $(".pillars-reply").hide();
    $(".pillars-button").hide();
});
$(".restart-button").click(function() {
     $(".face-reply").show();
     $(".girl-reply").show();
     $(".bunny-reply").show();
     $(".duck-reply").show();
     $(".faces-reply").show();
     $(".pillars-reply").show();
     $(".young-reply").show();
     $(".old-reply").show();
    
     $(".face-button").show();
     $(".girl-button").show();
     $(".bunny-button").show();
     $(".duck-button").show();
     $(".faces-button").show();
     $(".pillars-button").show();
     $(".young-button").show();
     $(".old-button").show();
});


