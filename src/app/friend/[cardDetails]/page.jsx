import DetailsButtons from "../../../components/cards/DetailsButtons";
import Image from "next/image";


import { FiArchive } from "react-icons/fi";

import { MdOutlineNotificationsPaused } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";






const CardDetails = async ({ params }) => {
    const { cardDetails } = await params;

    const res = await fetch("https://keen-keeper-teal.vercel.app/friends.json", {
        cache: "no-store",
    });
    const data = await res.json();

    const card = data.find(
        (item) => Number(item.id) === Number(cardDetails)
    );

 
   

    return (
        <div>

            {card ? (
                <div className="max-w-6xl container mx-auto mt-5">

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 p-4 md:p-10">
                        <div className="lg:col-span-2">
                            <div className="shadow-md bg-white rounded-xl py-10 px-4 flex flex-col items-center text-center gap-2">
                                <div >
                                    <div >
                                        {card.picture && (
                                            <Image
                                                src={card.picture}
                                                alt={card.name}
                                                width={100}
                                                height={100}
                                                className="rounded-full mt-6"
                                            />
                                        )}
                                    </div>
                                </div>
                                <h2 className="font-semibold text-2xl">{card.name}</h2>

                                <p className={`badge p-3 rounded-full text-white font-semibold ${card.status === "Overdue"
                                    ? "bg-[#EF4444]"
                                    : card.status === "On-Track"
                                        ? "bg-[#244D3F]"
                                        : card.status === "Almost Due"
                                            ? "bg-[#EFAD44]"
                                            : "bg-gray-400"
                                    }`}>{card.status}</p>

                                <div className="card-actions justify-end">

                                    {card.tags.map((tag, ind) => (
                                        <div
                                            key={ind} className="badge bg-[#CBFADB] p-3 text-[#244D3F] font-semibold" >
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[#64748B]">{card.bio}</p>
                                <p className="text-[#64748B]">{card.email}</p>

                            </div>
                            <div className="mt-5 space-y-2">
                                <button className="btn w-full bg-white flex items-center justify-center gap-1 font-bold"><MdOutlineNotificationsPaused /> Snooze 2 Weeks </button>
                                <button className="btn w-full bg-white flex items-center justify-center gap-1 font-bold"><FiArchive />
                                    Archive </button>
                                <button className="btn w-full bg-white flex items-center justify-center gap-1 font-bold text-red-600"><RiDeleteBin6Line />

                                    Delete </button>
                            </div>
                        </div>
                        <div className="col-span-3 rounded-xl space-y-5">
                            <div className="grid grid-cols-3 gap-3 ">
                                <div className="shadow-md rounded-xl text-center py-12 bg-white">
                                    <div className="text-2xl text-[#244D3F] font-bold">{card.days_since_contact}</div>
                                    <div className="text-[#64748B]">Days Since Contact</div>
                                </div>
                                <div className="shadow-md rounded-xl text-center py-12 bg-white">
                                    <div className="text-2xl text-[#244D3F] font-bold">{card.goal}</div>
                                    <div className="text-[#64748B]">Goal(Days)</div>
                                </div>
                                <div className="shadow-md rounded-xl text-center py-12 bg-white">
                                    <div className="text-2xl text-[#244D3F] font-bold">{card.next_due_date}</div>
                                    <div className="text-[#64748B]">Next Due</div>
                                </div>
                            </div>

                            <div className="shadow-md rounded-lg px-4 py-8 bg-white relative">
                                <button className="btn btn-sm bg-white float-right">Edit</button>
                                <h3 className="font-bold text-xl text-[#244D3F]">Relationship Goal</h3>
                                <br />
                                <p className="font-bold"><span className="text-[#64748B] font-medium">Connect every</span> {card.goal} days</p>
                            </div>

                            <div className="shadow-md p-5 rounded-lg bg-white py-12">
                                <h1 className="text-[#244D3F] mb-3 font-bold text-xl">Quick Check-In</h1>
                                <div >
                                    <DetailsButtons card={card}/>
                                </div>
                            </div>

                            
                            
                        </div>
                    </div>

                </div>
            ) : (
                <div>
                    <h2 className=" text-red-400 text-center items-center font-bold text-4xl py-48">Error occurred while fetching friend data. Please try again later.</h2>
                </div>
            )}
        </div>
    );
};

export default CardDetails;