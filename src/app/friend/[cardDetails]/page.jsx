





const CardDetails = async ({ params }) => {
    const { cardDetails } = await params;

    const res = await fetch("http://localhost:3000/friends.json");
    const data = await res.json();

    const card = data.find(
        (item) => Number(item.id) === Number(cardDetails)
    );

    return (
        <div>
            <h2>Card Details</h2>

            {card ? (
                <div>
                    <p>Name: {card.name}</p>
                    <p>Email: {card.email}</p>
                    <p>Days Since Contact: {card.days_since_contact}</p>
                </div>
            ) : (
                <p>Card not found</p>
            )}
        </div>
    );
};

export default CardDetails;