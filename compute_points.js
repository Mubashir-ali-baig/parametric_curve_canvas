class compute_curve{
    constructor(minT,maxT)
    {
      this.minT=minT;
      this.maxT=maxT;
      this.x=x;
      this.y=y;
      
    }

    mapToarray()
    {
      var list=[];
        var parts=1000;
      var a=20;
      var t=(this.maxT - this.minT)/parts;
      
      //x(t)=(at^2)/2
//y(t)=2at+cvswidth/2
      /*for(var i=this.minT;i<this.maxT;i=i+t)
      {
          var obj=new Object()
          this.x=(a*i*i)/2; //parabola
          this.y=(2*a*i + cvs.height/2);
         //this.x=Math.sin(a*i);
         //this.y=Math.sin(a*i);
         obj.x=this.x;
          obj.y=this.y;
          console.log(obj.x,obj.y)
          list.push(obj);
          
      }
      */
     var list2=[]
for(var i=this.minT;i<this.maxT;i=i+t)
      {
          var obj1=new Object()
          this.x=a*i*i/4; //parabola
          this.y=2*a*i+cvs.height/2;
         
          obj1.x=this.x;
          obj1.y=this.y;
          
          list2.push(obj1);
          
         i=i*(-1)
          this.x=a*i*i/4; //parabola
          this.y=2*a*i+ cvs.height/2;
         var obj2=new Object()
          obj2.x=this.x;
          obj2.y=this.y;
          
          list.push(obj2);
          i=i*(-1)
          
      }
var l=list2.reverse()
list=list.concat(l)
      for(var i=0;i<list.length;i++)
      {
          console.log(list[i].x,list[i].y)
          console.log("next")
      }
      var j;
      
      this.draw(list);  
     
    }
    
    draw(list)
    {
       var j;
       var i=0
        for(var j=i+1;j<list.length;j++)
        {
            console.log(list[i].x,list[i].y)
            j=i+1;
            ctx.moveTo(list[i].x,list[i].y)
            
            ctx.lineTo(list[j].x,list[j].y);
            ctx.stroke();
            i++;
        } 
    }
}