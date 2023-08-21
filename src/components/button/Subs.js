import React, { useState } from "react";

const Subs = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleClick = () => {
        setSubscribed(!subscribed);
    };

    return (
        <button onClick={handleClick}>
            <div className={`flex items-center justify-center text-xs text-white border border-1 px-7 py-1 rounded-md w-full ${subscribed ? 'bg-purpc' : 'bg-main'}`}>
                {subscribed ? 'Subscribed' : 'Subscribe'}
            </div>
        </button>
    )
}

export default Subs;