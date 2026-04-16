// 'use client';
// import { useState, createContext } from "react";


// export const cardButtonsContext = createContext();

// const CardContext = ({ children }) => {
//   const [timelineData, setTimelineData] = useState([]);

//   const data = {
//     timelineData, 
//     setTimelineData
//   };

//   return (  
//       <cardButtonsContext.Provider value={data}>
//         {children}
//       </cardButtonsContext.Provider>  
//   );
// };

// export default CardContext;

import { useState, createContext, useEffect } from "react";

export const cardButtonsContext = createContext();

const CardContext = ({ children }) => {
  const [timelineData, setTimelineData] = useState(() => {
    const stored = localStorage.getItem("timeline");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timelineData));
  }, [timelineData]);

  return (
    <cardButtonsContext.Provider value={{ timelineData, setTimelineData }}>
      {children}
    </cardButtonsContext.Provider>
  );
};

export default CardContext;