
 
 
 
 //var beats =new Audio("song3.mp3");
//document.querySelector( ".pausebtn").addEventListener("click",function(){
  //  beats.play();
//});
//document.querySelector(".icon").addEventListener("click", function(){
  //  beats.pause();
//});

var mySong =document.getElementById("mySong");
var icon =document.getElementById("icon");

icon.onclick=function(){
  if(mySong. paused){
      mySong.play();
      icon.src="pause.png";
  }
  else{
      mySong.pause();
      icon.src="play.png";
  }
 
  mySong.play();
}
