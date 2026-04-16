'use client';
import { use } from "react";
import Image from "next/image";
import Link from "next/link";

const cardPromise = fetch("https://keen-keeper-teal.vercel.app/friends.json", {
    cache: "no-store",
})
    .then((res) => res.json());

const FriendCard =  () => {
    const cards = use(cardPromise);

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
                <Link key={index} href={`/friend/${card.id}`}>
                    <div className="card bg-base-100 shadow-sm cursor-pointer hover:shadow-xl transition duration-300">

                        <figure>
                            {card.picture && (
                                <Image
                                    src={card.picture}
                                    alt={card.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full mt-6"
                                />
                            )}
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">
                                {card.name}
                            </h2>

                            <p className="text-[#64748B]">
                                {card.days_since_contact}d ago
                            </p>

                            <div className="card-actions justify-end">
                                {card.tags.map((tag, ind) => (
                                    <div
                                        key={ind}
                                        className="badge bg-[#CBFADB] p-3 text-[#244D3F] font-semibold"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <div
                                className={`badge p-3 rounded-full text-white font-semibold ${card.status === "Overdue"
                                    ? "bg-[#EF4444]"
                                    : card.status === "On-Track"
                                        ? "bg-[#244D3F]"
                                        : card.status === "Almost Due"
                                            ? "bg-[#EFAD44]"
                                            : "bg-gray-400"
                                    }`}
                            >
                                {card.status}
                            </div>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    );
};

export default FriendCard;
