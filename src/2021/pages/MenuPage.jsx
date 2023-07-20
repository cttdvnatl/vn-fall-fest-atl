import React from 'react'
import { useTranslation, getLanguage } from 'react-multi-lang'
import en from '../database/en.json';

const Menu = (list) => {
    return (
    <>
    {list.data.map((menu) => (
        <div class="menu">
            <img src={menu.img} alt={menu.img}/>
        </div>
    ))}
    </>
    )
}

export const MenuPage = () => {
    const t = useTranslation()
    
    let Data;
    
    if (getLanguage() === 'en') {
        Data = en.menu.content;
    }

    return (
        <>
        <div class="menu-page">
            <h1>{t('menu.pageTitle')}</h1>
            <Menu data={Data}/>
        </div>
        </>
    )
} 