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
  const [selectedTerraceEnv, setSelectedTerraceEnv] = useState(getLocalTerraceItems() || {envId: 1, varId: 1});

  useEffect(() => {
    localStorage.setItem("TerraceEnvironment", JSON.stringify(selectedTerraceEnv));
  }, [selectedTerraceEnv]);


  const onEnvChange = (envId, varId) => {
    setSelectedTerraceEnv({envId, varId});
  };

  const onEnvVarChange = (varId) => {
    setSelectedTerraceEnv({...selectedTerraceEnv, varId});
  };

  return (
    <TerraceContext.Provider
      value={{
        ...props,
        selectedTerraceEnv,
        onEnvChange,
        onEnvVarChange
      }}
    >
      {props.children}
    </TerraceContext.Provider>
  );
}
