// jQuery Events


$(function(){
    $("#clicked").on("click", function(){ 
        console.log("You Clicked me!")
    })
});


// dbclick, mouseenter, mouseleave,. mousedown, mouseup, hover. Hover uses TWO functions.


$(".hover").on({
    mouseenter: function () {
        console.log("You entered.");
    },
    mouseleave: function() {
        console.log("You left.");
    }
});


//Run a Method ONCE.

$(function(){
    $(".once").one({
        "click": function() {
            console.log("Clicked!");
        }
    });
})



//jQuery Effects

//hide, show, slideUp, slideDown, fadeIn, fadeOut, toggle, stop

$("#fade").fadeOut(500);
$("#fade").fadeIn(2000);

$("#addclass").fadeOut(500);
$("#addclass").fadeIn(2000, function() {
    $(this).addClass("blue");
})

$("#fade").on("click", function() {
    $("#fade").stop();
})

$("h3").hide(500).delay(1000).show(300);




// jQuery .animate

// .animate ( properties [, duration ] [, easing ] [, complete ])

// .animate( properties, options )

// You will need jQuery UI to animate the background-color property. 

$("#go").on("click", function() {
    $("#block").animate({
        opacity: .5,
        marginLeft: "+=50",
        backgroundColor: "red"
    }, 3000, "linear", function() {
        $(this).after("<div>Animation complete.</div>");
    });
})



$("#go2").on("click", function() {
    $("#block2")
    .animate({width: "90%" }, 1000)
    .animate({fontSize: "40px" }, 1000)
    .animate({borderLeftWidth: "30px" }, 1000)
})




// jQuery: Getting and Setting Content and Attributes


$("#btn").on("click", function () {
    console.log($("#google").attr("href"));
});

$("#btn2").on("click", function () {
    $("#test").text(function(i, origText) {
        return "Google is awesome! (index: " + i + ")"
    })
});

$("#btn3").on("click", function () {
    $("#name").val("Ben Green")
});




// jQuery: Adding and Removing Elements


$(".target").prepend('<div class="child">This has prepended to the beginning of the text</div>')
$(".target").append('<div class="child">This has appended to the end of the div</div>')
$(".target").before('<div class="sibling">This is added before the div is created.</div>')
$(".target").after('<div class="sibling">This is added after the div is created.</div>')

$(".target").append('<b>Here we have appended a bold tag to the end of the .target element!</b>')

$("#remove").on("click", function() {
    $("p").remove(".filter")
})



// CSS and Classes


 $("#changecss").on("click", function() {
     $("p.changecss").css({
         color: "blue",
         backgroundColor: "yellow"
     });
 });

 $("#add").on("click", function() {
     $(".forAdding").addClass("addedClass")
 })

 $("#removes").on("click", function() {
    $("p.forRemoving").removeClass("forRemoving")
})

 $("#toggle").on("click", function() {
     $("p.forToggling").toggleClass("toggled")
 });

$("#has").on("click", function() {
    console.log($(".hasClass").hasClass("hasClass"));
});



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


function loadDoc() {

    $("#demo").load("https://gist.githubusercontent.com/readwalkerchang/2ab04719367da1778384762cc2befd23/raw/cb095bf75c39570b7a2734a8ab51c60c5b36eaa0/dark.json",
    function(responseTxt, statusTxt, xhr) {
        if(statusTxt == "success")
            alert("External content loaded");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    })
}

$("#driver").on("click", function(event){
    $.getJSON("https://gist.githubusercontent.com/readwalkerchang/2ab04719367da1778384762cc2befd23/raw/cb095bf75c39570b7a2734a8ab51c60c5b36eaa0/dark.json", function(data) {
       $('#stage').html('<p>Name: ' + data.members[0].name + '</p>');
       $('#stage').append('<p>Teen : ' + data.members[0].teen + '</p>');
       $('#stage').append('<p>Adult  : ' + data.members[0].adult + '</p>');
       $('#stage').append('<p>Description  : ' + data.members[0].description[0] + ". " + data.members[0].description[1] + ". " + data.members[0].description[2] + '</p>');
    });
 });


//jQuery vs Vanilla JavaScript
/*
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
    success: (ddata) => { // do stuff with the data // }
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
*/