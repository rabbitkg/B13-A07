'use client';
import { cardButtonsContext } from '../../context/cardContext';
import React, { useContext } from 'react';
import { LuPhoneCall, LuVideo } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';

const DetailsButtons = ({card}) => {

    const {timelineData, setTimelineData} = useContext(cardButtonsContext);
    console.log(timelineData, "timeline data from context"); 

//  const handleCardDetailsButton = () => {
//         const newActivity = {
//         id: Date.now(),
//         type, // call | text | video
//         name: card.name,
//         timestamp: new Date().toISOString(),
//     };

//     setTimelineData([...timelineData, newActivity, card]);
//     }
 const handleCardDetailsButton = () => {
        console.log("Button clicked for card:");
        setTimelineData([...timelineData, card]); //{ type: "call", timestamp: new Date() }]);
    }


    return (
        <div className="flex gap-4">
            {/* <button className="btn flex h-16 flex-col py-10 px-20" onClick={handleCardDetailsButton}> */}
            <button className="btn flex h-16 flex-col py-10 px-20" onClick={() => handleCardDetailsButton("call")}>
                <div>
                    <LuPhoneCall className="w-6 h-6" />
                </div>
                <p>Call</p>
            </button>
            <button className="btn flex h-16 flex-col py-10 px-20" onClick={() => handleCardDetailsButton("text")}>
                <div>
                    <MdOutlineTextsms className="w-6 h-6" />
                </div>
                <p>text</p>
            </button>
            <button className="btn flex h-16 flex-col py-10 px-20" onClick={() => handleCardDetailsButton("video")}>
                <div>
                    <LuVideo className="w-6 h-6" />

                </div>
                <p>Video</p>
            </button>
        </div>
    );
};

export default DetailsButtons;