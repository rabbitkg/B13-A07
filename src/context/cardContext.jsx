'use client';
import { useState, createContext } from "react";


export const cardButtonsContext = createContext();

const CardContext = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  const data = {
    timelineData, 
    setTimelineData
  };

  return (  
      <cardButtonsContext.Provider value={data}>
        {children}
      </cardButtonsContext.Provider>  
  );
};

export default CardContext;