import React, { useState, useEffect } from "react";
import { createContext } from "react";

const getLocalTerraceItems = () => {
  try {
    const list = localStorage.getItem("TerraceEnvironment");
    if (list === null) {
      return null;
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return null;
  }
};

export const TerraceContext = createContext();

export default function TerraceProvider(props) {

    const [selectedEnvId,setSelectedEnvId] = useState(1);
    const [selectedEnvVarId,setSelectedEnvVarId] = useState(1);

    const [selectedBoardId,setSelectedBoardId] = useState(1);
    const [selectedBoardColorVarId,setSelectedBoardColorVarId] = useState(1);
  

  useEffect(() => {
    localStorage.setItem("TerraceEnvironment", JSON.stringify(selectedEnvId));
  }, [selectedEnvId]);


  const onEnvChange=(id)=>{
    setSelectedEnvId(id);
  }
  
  const onEnvVarChange = (id)=>{
    setSelectedEnvVarId(id)
  }

  const onBoardChange=(id)=>{
    setSelectedBoardId(id);
  }
  
  const onBoardColorVarChange = (id)=>{
    setSelectedBoardColorVarId(id)
  }
  const getEnvId =()=>{
    return selectedEnvId;
  }
  const getVarId =()=>{
    return selectedEnvVarId;
  }



  return (
    <TerraceContext.Provider
      value={{
        ...props,
        selectedEnvId,
        selectedEnvVarId,
        selectedBoardId,
        selectedBoardColorVarId,
        onEnvChange,
        onEnvVarChange,
        onBoardChange,
        onBoardColorVarChange,
        getEnvId,
        getVarId
      }}
    >
      {props.children}
    </TerraceContext.Provider>
  );
}
