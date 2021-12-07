import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function SquareShape(){

    const[height,setHeight]=useState('50');
    const[width,setWidth]=useState('50');
    const ren=()=>{
        let canvasDiv = document.getElementById('canvas-div');
       let g=document.createElement('canvas');
        g.setAttribute('id',"canvas")
        g.style.width=width+'mm'
        g.style.height=height+'mm'
        canvasDiv.append(g);
        if(g!=null){
            var ctx = g.getContext("2d");
            ctx.fillStyle = "#A37C4D";
            ctx.fillRect(0,0,g.width, g.height);
    
            ctx.beginPath();
            let i=0;
            let n=20;
            while(i+n<g.width){
                ctx.moveTo(i+n, 0);
                ctx.lineTo(i+n, g.height);
                i=i+n
            }
            ctx.stroke();
        }
        else{
            alert("Something went wrong");
        }
    }
    useEffect(()=>{
       ren()
    },[])


    const onChangeHeight=(e)=>{
        setHeight(e.target.value);
        document.getElementById('canvas').remove();
        ren();
    }
    const onChangeWidth=(e)=>{
       setWidth(e.target.value);
        document.getElementById('canvas').remove();
        ren();
   }
    
    return(
      <Grid container direction="column">
          <Grid item>
              <Grid container direction="row" style={{justifyContent:"center",alignItems:"center",marginTop:".2em"}}>
              <Typography>Width</Typography>
              <input type="number" id="width" value={width} onChange={onChangeWidth}/>
              <Typography>mm</Typography>
              </Grid>
          </Grid>
          <Grid item>
             <Grid container direction="row" style={{justifyContent:"center",alignItems:"center",marginBottom:".5em"}}>
                <Typography >Height</Typography>
                <input type="number" id="height" value={height} onChange={onChangeHeight}/>
                <Typography>mm</Typography>
             </Grid>
          </Grid>
          <Grid item id='canvas-div' style={{width:'100%'}}>
          </Grid>
      
      </Grid>
    )
}