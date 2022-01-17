import React from 'react';
import { useTranslation } from 'react-multi-lang';

const PopUp = (data) => {
    const t = useTranslation();
    return (
        <>
        <div class="pop-up-container">
            <div class="pop-up"> 
                <img src={t(data + '')} alt="popup"/>
            </div>
        </div>
        </>
    )
}

export default PopUp;