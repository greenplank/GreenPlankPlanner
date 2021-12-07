import React, { useState } from "react";
import './shape.css'


export default function Shapes() {
                                                                                                                                       
var canvas = document.querySelector("canvas");
if(canvas!=null){
var ctx = canvas.getContext("2d");
var squareCountNum = document.querySelector("squareCount");
var widthNum = document.querySelector("width");
var heightNum = document.querySelector("height");
var squareCount = squareCountNum.value;
}
else{
    alert("Value not detacted")
}
squareCountNum.onchange = function(e)
{
    squareCount = e.target.value;
    draw();
}

widthNum.onchange = function(e)
{
    canvas.width = e.target.value;
    canvas.style.width = e.target.value + "px";
    draw();
}

heightNum.onchange = function(e)
{
    canvas.height = e.target.value;
    canvas.style.height = e.target.value + "px";
    draw();
}

function draw()
{  
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let area = canvas.width * canvas.height;
  let areaPerSquare = parseInt(area/squareCount);
  let size = 100;
  if (squareCount == 1)
  {
    if (canvas.width > canvas.height)
    {
      size = canvas.height;
    } else {
      size = canvas.width;
    }
  } else {
    if (canvas.width > canvas.height)
    {
      size = canvas.width/squareCount;
    } else {
      size = canvas.height/squareCount;
    }
  }
  let row = 0;
  let currentIndex = 0;
  for (let i=0; i<squareCount; i++)
  {
    ctx.beginPath();
    if (currentIndex*size+size > canvas.width)
    {
      row++;
      currentIndex = 0;
    }
    ctx.rect(currentIndex*size, row*size, size, size); //how do I maximize size?
    ctx.fillStyle = "#"+Math.floor(Math.random()*16777215).toString(16);
    ctx.fill();
    ctx.closePath();
    currentIndex++;
  }
}

draw();

        return(
        <div>
              <canvas id="canvas" width="640" height="360"></canvas>
              <div>
                  <label>Square Count</label>
                  <input type="number" id="squareCount" value={1}></input>
             </div>
             <div>
                 <label>Width</label>
                 <input type="number" id="width" value={320}/>
             </div>
             <div>
                <label>Height</label>
                <input type="number" id="height" value={180}/>
            </div>

          </div>  
        );



  }