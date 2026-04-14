

// const CardLoading = () => {
//     return (
//         <div className="flex items-center justify-center h-screen">
            
//             <span className="loading loading-spinner text-accent"></span>
//             <span className="loading loading-spinner text-neutral"></span>
//             <span className="loading loading-spinner text-info"></span>
            
//         </div>
//     );
// };

// export default CardLoading;

// src/app/friend/loading.jsx
export default function FriendsLoading() {
    return (
        <div className="flex items-center justify-center py-20">
            <div className="flex gap-3">
                <span className="loading loading-spinner loading-lg text-accent"></span>
                <span className="loading loading-spinner loading-lg text-neutral"></span>
                <span className="loading loading-spinner loading-lg text-info"></span>
            </div>
        </div>
    );
}