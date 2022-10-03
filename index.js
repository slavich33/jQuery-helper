//We can put js from ready method and it will loaded up if
// we put it on the top of index.html
// $(document).ready(function() {
//   $("h1").css("color","red");
// });

// Manipulate text
// $("h1").addClass("big-title margin-50");
// // $("h1").removeClass("big-title");
// $("h1").text("Bye");
//
// $("button").text("Do not click it!");
// $("button").html("<em>Hey</em>");

// Manipulate attributes
// $("h1").attr("class"); Find out all of the classes of html to it
// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com")

// Add Listener click
// $("h1").click(function() {
//   $("h1").css("color", "purple");
// });

// Example of using JS to loop thru all button and change color on click button
// for (var i = 0; i<5; i++;) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }
// Example of using jQuery to loop thru all button and change color on click button
// with listener
// $("button").click(function() {
//   $("h1").css("color", "purple");
// })

// jQuery to find out what was tapped inside input
// $("input").keypress(function(event) {
//   console.log(event.key);
// });

// jQuery how to manipulate text using jQuery(input or whatewher you want)
// $("input").keypress(function(event) {
//   $("h1").text(event.key);
// });

// We can mouseover to change color with listener - on
// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// });

// We can add new button before any element
// $("h1").before("<button>New</button>"); - before the oppening tag of selected element <button>New</button><h1>Hi</h1>
// $("h1").after("<button>New</button>"); - after the oppening tag of selected element <h1>Hi</h1><button>New</button>
// $("h1").prepend("<button>New</button>"); - before the content of the h1 element <h1><button>New</button>Hi</h1>
// $("h1").append("<button>New</button>"); - after the content of the h1 element <h1>Hi<button>New</button></h1>

// We can click to hide any element("h1") with listener - on
// and to appear it we will write $("h1").show();
// $("button").on("click", function() {
  // or just toggle to switch state
  // $("h1").toggle();
  // or fadeOut and fadeIn
  // $("h1").fadeOut();
  // or slideToggle with slideDown slideUp
//   $("h1").slideToggle();
// });

// We can use animate as well
// $("button").on("click", function() {
  // to change some custom css
  // $("h1").animate({opacity: 0.5}); //Only numeric values inside animate method
  // $("h1").animate({margin: "20%"}); //Margin as well! going on 20% from everyside
  // we can combine things as well
  // $("h1").slideUp().slideDown().animate({opacity: 0.5});
// });
