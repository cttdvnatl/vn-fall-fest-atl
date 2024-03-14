import React from 'react';
import { Routes, Route } from "react-router-dom";

//Layout imports
import { Layout2021 } from "../layouts/Layout2021";

//page imports
import {HomePage} from "../2021/pages/HomePage";
import {AboutPage} from "../2021/pages/AboutPage";
import {FestivalSchedulePage} from "../2021/pages/FestivalSchedulePage";
import {MusiciansPage} from "../2021/pages/MusiciansPage";
import {ContestPage} from "../2021/pages/ContestPage";
import {RafflesPage} from "../2021/pages/RafflesPage";
import {SeminarPage} from "../2021/pages/SeminarPage";
import {MenuPage} from "../2021/pages/MenuPage";
import {VendorsPage} from "../2021/pages/VendorsPage";
import {SponsorsPage} from "../2021/pages/SponsorsPage";
import {ContactPage} from "../2021/pages/ContactPage";
import {DirectionsPage} from "../2021/pages/DirectionsPage";
import {DonationsPage} from "../2021/pages/DonationsPage";
import {PageNotFound} from '../shared-components/PageNotFound';

//Error/Success Pages
import {FormSubmitSuccessPage} from "../2021/pages/FormSubmitSuccessPage";
import {FormSubmitErrorPage} from "../2021/pages/FormSubmitErrorPage";

const Route2021 = () => {
    return (
        <Routes>
            <Route element={<Layout2021/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/festival-schedule" element={<FestivalSchedulePage/>} />
                <Route path="/musicians" element={<MusiciansPage/>} />
                <Route path="/contests" element={<ContestPage/>} />
                <Route path="/raffles" element={<RafflesPage/>} />
                <Route path="/seminar" element={<SeminarPage/>} />
                <Route path="/menu" element={<MenuPage/>} />
                <Route path="/sponsors" element={<SponsorsPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/form-success" element={<FormSubmitSuccessPage/>} />
                <Route path="/form-error" element={<FormSubmitErrorPage/>} />
                <Route path="/directions" element={<DirectionsPage/>} />
                <Route path="/donations" element={<DonationsPage/>} />
                <Route path='*' element={<PageNotFound/>}/>
            </Route>
        </Routes>
    )
}

export default Route2021