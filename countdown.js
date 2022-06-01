function timerdisplayv1(){
	console.log("timerdisplayv1() begin");
	var counter = 50;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 2000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 4000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 6000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 8000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 10000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 12000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 14000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 16000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 18000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = "Fire!";
    console.log(counter);
  }, 20000);
}
