

'use client';
import { useState, createContext } from "react";

export const cardButtonsContext = createContext();

const CardContext = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);
 
  return (
    <cardButtonsContext.Provider value={{ timelineData, setTimelineData }}>
      {children}
    </cardButtonsContext.Provider>
  );
};

export default CardContext;