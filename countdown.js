function timerdisplayv1(){
    console.log("timerdisplayv1() begin");

    var counter = 50;
    document.getElementById("timerdisplay").innerHTML = counter;
    for (let i = counter; i >= 0; i = i - 5)
    {
      const j = i;
      if (j != 0 && j > 25)
        {
            setTimeout(function(){document.getElementById("timerdisplay").innerHTML = "Time left = " + j; console.log(j);}, ((counter - j)*1000));
        } else if (j != 0 && j <= 25){
            setTimeout(function(){document.getElementById("timerdisplay").innerHTML = "Warning Less than half way to launch, time left = " + j; console.log(j);}, ((counter - j)*1000));
        } else {
            setTimeout(function(){document.getElementById("timerdisplay").innerHTML = "Blastoff!"; console.log(j);}, ((counter - j)*1000));
        }
  }
}
