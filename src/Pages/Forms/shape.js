import React from "react";

  const renderShape=(d)=>{
    
      return(
          <>
          <img src={d} alt="" width="100%" />
          </>
      );
  }

  export default function Shapes({image}) {
  
        return(
            <>
            {renderShape(image)}
            </>
        );
  }