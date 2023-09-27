// Getting Started With jQuery 

/*
$(document).ready(function(){

    $("button").click(function(){  ### .ready is now deprecated. Use $(function(){ }) instead. 
    });
});
*/



// jQuery Events

/*
$(function(){
    $("p").click(function(){  ### .click is now deprecated. Use .on instead.
        console.log("You Clicked a Paragraph!")
    })
});
*/

// dbclick, mouseenter, mouseleave,. mousedown, mouseup, hover. Hover uses TWO functions.

/*
$("p").on({
    mouseenter: function () {
        console.log("You entered.");
    },
    mouseleave: function() {
        console.log("You left.");
    }
});
*/

//Run a Method ONCE.
/*
$(function(){
    $("p").one({
        "click": function() {
            console.log("Clicked!");
        },
        "mouseover": function() {
            console.log("Hovered!");
        }
    });
})
*/



//jQuery Effects

//hide, show, slideUp, slideDown, fadeIn, fadeOut, toggle, stop
/*
$("p").fadeOut(500);
$("p").fadeIn(2000, function() {
    $(this).addClass("blue");
})

$("p").on("click", function() {
    $("p").stop();
})

$("h3").hide(500).delay(1000).show(300);
*/



// jQuery .animate

// .animate ( properties [, duration ] [, easing ] [, complete ])

// .animate( properties, options )
/*
$("#go").on("click", function() {
    $("#block").animate({
        opacity: .5,
        marginLeft: "+=50",
        height: "400px"
    }, 3000, "linear", function() {
        $(this).after("<div>Animation complete.</div>");
    });
})
*/

/*
$("#go").on("click", function() {
    $("#block")
    .animate({width: "90%" }, 1000)
    .animate({fontSize: "40px" }, 1000)
    .animate({borderLeftWidth: "30px" }, 1000)
})
*/



// jQuery: Getting and Setting Content and Attributes

/*
$("#btn").on("click", function () {
    console.log($("#fcc").attr("href"));
});

$("#btn2").on("click", function () {
    $("#test").text(function(i, origText) {
        return "Old text: " + origText + " New text: freeCodeCamp is awesome! (index: " + i + ")"
    })
});

$("#btn3").on("click", function () {
    $("#name").val("Ben Green")
});
*/



// jQuery: Adding and Removing Elements

/*
$(".target").prepend('<div class="child">Prepend</div>')
$(".target").append('<div class="child">Append</div>', '<p> Hello!</p>')
$(".target").before('<div class="sibling">Before</div>')
$(".target").after('<div class="sibling">After</div>')

$(".target").append('<b>LOTS</b>')

$("p").remove(".filter")
*/



// CSS and Classes
/*
$("button").on("click", function() {
    $("p.big").css("fontSize", "100px");
});

 $("button").on("click", function() {
     $("p.big").css({
         fontSize: "50px",
         color: "blue",
         backgroundColor: "yellow"
     });
 });

 $("button").on("click", function() {
     $("h1").addClass("red")
     $("p").removeClass("big")
 })

 $("button").on("click", function() {
     $("p").toggleClass("big")
 });

$("button").on("click", function() {
    console.log($("h2").hasClass("big"));
});

*/

// jQuery: Traversing the DOM

//$("li").parent().css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("span").parents().css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("li").parentsUntil("div").css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("span").children().css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("span").children("h2").css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("ul").find("span").css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("ul").find("*").css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("h3").siblings().css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("h3").siblings("p").css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("h3").next().css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("h3").nextAll().css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("span.child").nextUntil("p").css({"color" : "chocolate" , "border" : "2px solid chocolate"})
//$("span.child").prev().css({"color" : "chocolate" , "border" : "2px solid chocolate"})

//jQuery: AJAX = Asynchronous JavaScript and XML

/*
function loadDoc() {
    $.post("https://learnwebcode.github.io/json-example/animals-1.json",
    {
        name: "Carlos",
        city: "Teeden"
    },
    function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    });
    $.get("https://learnwebcode.github.io/json-example/animals-1.json",
    function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    });

    /*
    $("#demo").load("https://learnwebcode.github.io/json-example/animals-1.json",
    function(responseTxt, statusTxt, xhr) {
        if(statusTxt == "success")
            alert("External content loaded");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    })
}
*/

//jQuery vs Vanilla JavaScript

//Selecting an Element
// the jQuery way...
var $elem = $(".someclass");

//the vanilla JavaScript way...
var elem = document.querySelector(".someClass");

//Removing an Element
// the jQuery way...
$elem.remove();

//the vanilla JavaScript way...
elem.remove();

//prepend an Element
// the jQuery way...
$elem.prepend($otherElem)

//the vanilla JavaScript way...
elem.prepend(otherElem)

//Fadein an Element
// the jQuery way...
var $elem = $(".someClass")
$elem.fadeIn();

//the vanilla JavaScript way...
//Add clas to CSS and implement the following code:
var elem = document.querySelector(".someClass");
elem.computedStyleMap.display = "block";
requestAnimationFrame(() => elem.style.opacity = 1);

//animate an Element
// the jQuery way...
var $elem = $(".someClass")
$.ajax('https://some.url', {
    success: (ddata) => { /* do stuff with the data */ }
});

//the vanilla JavaScript way...
var elem = document.querySelector(".someClass");
fetch('https://some.url')
.then(response => response.json())
.then (data => {
    // do stuff with the data
})

//Fadein an Element
// the jQuery way...
var $elem = $(".someClass")
$elem.animate({
    width: "70%",
    opacity: 0.4,
    marginLerft: "0.6in"
}, 1500);

//the vanilla JavaScript way...
var elem = document.querySelector(".someClass");
elem.animate ([
    {
        transform: 'translateY(-1000px) scale(2.5) scaleX(.2)',
        filter: 'blur(40px)',
        opacity: 0
    },
    {
        transform: 'translateY(0) scale(1) scaleX(1)',
        filter: 'blur(0)',
        opacity: 1
    }
], 1000)

