import React from 'react';
import { useTranslation } from 'react-multi-lang';

const Header = () => {
    const t = useTranslation();
    return (
        <>
            <nav>
                <ul>
                    <li>{t('header.dropdownOne.heading')}</li>
                    <li>{t('header.dropdownTwo.heading')}</li>
                    <li>{t('header.dropdownThree.heading')}</li>
                    <li>{t('header.dropdownFour.heading')}</li>
                </ul>
            </nav>
        </>
    )
}

export default Header;