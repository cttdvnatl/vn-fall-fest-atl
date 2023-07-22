import React, { useState } from 'react';

const UnderConstruction = () => {
    const [showBanner, setShowBanner] = useState(true);

    const deleteButton = () => {
        setShowBanner(!showBanner);
    }

    return (
        <div className='under-construction-banner'>
            {showBanner &&<img alt="image" src="https://hvmatl.com/gallery/LHMT_img/LHMT2023/Construction%20sign/UnderConstruction-removebg-preview.png"/>}
            {showBanner &&<button className='button' onClick={deleteButton}>X</button>}
        </div>
    );
}

export default UnderConstruction;