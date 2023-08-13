import React, { useState } from 'react';

const UnderConstruction = () => {
    const [showBanner, setShowBanner] = useState(true);

    const deleteButton = () => {
        setShowBanner(!showBanner);
    }

    return (
        <>
        {showBanner &&
        <div className='under-contruction-container'>
            <div className='under-construction-banner'>
             <button className='button' onClick={deleteButton}>x</button>
             <h2>Under Construction</h2>  
             <h2>Xin quý vị trở lại</h2>
        </div>
    </div>
}
 </>
    );
}

export default UnderConstruction;