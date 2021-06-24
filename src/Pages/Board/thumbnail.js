import React from "react";

  const renderthumbnail=(th)=>{
    
      return(
          <>
          <img src={th} alt="" width="100%"/>
          </>
      );
  }

  export default function Thumbnail({image}) {
  
        return(
            <>
            {renderthumbnail(image)}
            </>
        );
  }