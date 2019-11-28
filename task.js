var cvs=document.getElementById("mycanvas");
var ctx=cvs.getContext('2d');

var x;
var y;
var endX;
var endY;
var minT=0
var maxT=10
var clicks=-1;

var graph=new compute_curve(minT,maxT)

graph.mapToarray();

//graph.draw();
