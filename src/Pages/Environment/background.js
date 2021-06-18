import React from "react";

  const renderBackground=(d,properties)=>{
    
      return(
          <>
          <img src={d} alt="" width="100%" 
          style={{...properties}} />
          </>
      );
  }

  export default function Background({image,properties={}}) {
  
        return(
            <>
            {renderBackground(image,properties)}
            </>
        );
  }