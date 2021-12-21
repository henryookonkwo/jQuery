$("h1").addClass("big-title margin-50");

$("button").text("Clickkk");
$("button").html("<em>Hello</em>");

// console.log($("img").attr());

$("a").attr("href", "https://www.yahoo.com");


// Adding Event listeners with JQuery
$("h1").click(function(){
    $("h1").css("color", "purple");
})


// for regular Javascript, we will write:
// for (var i = 0; i <5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "red";
//     });
// }

// With JQuery, we will write:
$("button").click(function() {
    $("h1").css("color", "red");
});


// $("input").keydown(function(event) {
//     console.log(event.key);
// });

$("body").keydown(function(event) {
    $("h1").text(event.key);
});

// Another way to add event listeners in JQuery
$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
});

$("h1").before("<button>before</button");
$("h1").prepend("<button>prepend</button");
$("h1").append("<button>append</button");
$("h1").after("<button>after</button");

// $("h1").fadeOut();
// $("h1").fadein();



$("button").on("click", function(){
    // Pre-built animations
    // $("h1").hide();
    // $("h1").show();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();


    // custom CSS animations
    //For the animate method, you only use css rules that have a numeric value
    $("h1").slideUp().slideDown().animate({opacity: 0.5, margin: "20%"});
    


});
