function timerdisplayv1(){
    console.log("timerdisplayv1() begin");

    var counter = 50;
    document.getElementById("timerdisplay").innerHTML = counter;
    for (let i = counter; i >= 0; i = i - 5)
    {
      const j = i;
      if (j!= 0)
      {
      // change timer back to 1000 when finished testing
        setTimeout(function(){document.getElementById("timerdisplay").innerHTML = j; console.log(j);}, ((counter - j)*10));
      }
      else {
        setTimeout(function(){document.getElementById("timerdisplay").innerHTML = "Blastoff!"; console.log(j);}, ((counter - j)*10));
    }
  }
}
