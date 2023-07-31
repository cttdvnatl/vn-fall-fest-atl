import React, { useState } from 'react';

const RafflePopUp = () => {
    const [showPopup, setShowPopup] = useState(true);

    const deleteButton = () => {
        setShowPopup(!showPopup);
    }

    return (
        <>
        {showPopup &&
            <div className='raffle-popup-container'>
                <div className='raffle-popup'>
                        <button className='button' onClick={deleteButton}>x</button>
                        <a className='rafflelink' href="https://www.vesolhmt.org">Click here to buy raffle tickets</a>
                        <h2>This will redirect you to https://www.vesolhmt.org.</h2>  
                </div>
            </div>
        }
        </>
    );
}

export default RafflePopUp;