import React from 'react'
import { useTranslation, getLanguage } from 'react-multi-lang'
import en from '../database/en.json';

const Vendors = (list) => {
    return (
    <>
    {list.data.map((vendor) => (
        <div class="vendor">
            <img src={vendor.img} alt={vendor.img}/>
        </div>
    ))}
    </>
    )

}

export const VendorsPage = () => {
    const t = useTranslation()
    
    let Data;

    if (getLanguage() === 'en') {
        Data = en.vendors.content;
    }

    return (
        <>
        <div class="vendors-page">
            <h1>{t('vendors.pageTitle')}</h1>
            <Vendors data={Data}/>
        </div>
        </>
    )
} 