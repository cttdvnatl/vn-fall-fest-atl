import React from 'react';
import "../2022/css/style.css";
import { Routes, Route } from "react-router-dom";

//Layout imports
import { Layout2022 } from "../layouts/Layout2022";

//page imports
import {HomePage} from "../2022/pages/HomePage";
import {AboutPage} from "../2022/pages/AboutPage";
import {FestivalSchedulePage} from "../2022/pages/FestivalSchedulePage";
import {MusiciansPage} from "../2022/pages/MusiciansPage";
import {ContestPage} from "../2022/pages/ContestPage";
import {RafflesPage} from "../2022/pages/RafflesPage";
import {SeminarPage} from "../2022/pages/SeminarPage";
import {MenuPage} from "../2022/pages/MenuPage";
import {VendorsPage} from "../2022/pages/VendorsPage";
import {SponsorsPage} from "../2022/pages/SponsorsPage";
import {ContactPage} from "../2022/pages/ContactPage";
import {DirectionsPage} from "../2022/pages/DirectionsPage";
import {DonationsPage} from "../2022/pages/DonationsPage";

//Error/Success Pages
import {FormSubmitSuccessPage} from "../2022/pages/FormSubmitSuccessPage";
import {FormSubmitErrorPage} from "../2022/pages/FormSubmitErrorPage";

export const Route2022 = () => {
    return (
        <Routes>
            <Route element={<Layout2022/>}>
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
            </Route>
        </Routes>
    )
}