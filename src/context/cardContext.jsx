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