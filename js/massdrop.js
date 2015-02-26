/*
@abhishek:sugarlabs
Simulation 1
Mass Drop Experiment

*/

function drawUniverse(){
 
 //constants
 var universeHeight=0.82*window.innerHeight,
     universeWidth=1*window.innerWidth;
     //universeLeft=0.3*window.innerWidth;
     //universeTop=-0.3*window.innerHeight;



var universe=document.createElement('canvas');
    universe.height=universeHeight;
    universe.width=universeWidth;
    universe.style.background="#161617";
    //universe.style.float='right';
var container=document.getElementById('canvas');
    container.appendChild(universe); 
  //alert("mass drop universe");

}
