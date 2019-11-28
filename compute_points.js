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
      
      
      for(var i=this.minT;i<this.maxT;i=i+t)
      {
          var obj=new Object()
          this.x=a*i*i; //parabola
          this.y=2*a*i;
         //this.x=Math.sin(a*i);
         //this.y=Math.sin(a*i);
         obj.x=this.x;
          obj.y=this.y;
          console.log(obj.x,obj.y)
          list.push(obj);
          
      }
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