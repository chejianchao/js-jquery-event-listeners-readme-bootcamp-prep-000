//define functions here

function getIt(){
  $("p").on("click", function(e){
    alert("Hey!")
  })
}

function frameIt(){
  $("img").on("load", function(e){
    e.target.addClass("tasty")
  })
}
function pressIt(){
  $("input").on("keydown", function(e){
    if( e.key=='g')
      alert("press G")
  })
}
function submitIt(){
  
}
$(document).ready(function(){

// call functions here
  
});
