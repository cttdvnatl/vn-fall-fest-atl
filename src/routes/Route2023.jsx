import React from 'react';
import { Routes, Route } from "react-router-dom";

//Layout imports
import { Layout2023 } from "../layouts/Layout2023";


//page imports
import {HomePage} from "../2023/pages/HomePage";
import {AboutPage} from "../2023/pages/AboutPage";
import {FestivalSchedulePage} from "../2023/pages/FestivalSchedulePage";
import {MusiciansPage} from "../2023/pages/MusiciansPage";
import {ContestPage} from "../2023/pages/ContestPage";
import {RafflesPage} from "../2023/pages/RafflesPage";
import {SeminarPage} from "../2023/pages/SeminarPage";
import {MenuPage} from "../2023/pages/MenuPage";
import {SponsorsPage} from "../2023/pages/SponsorsPage";
import {ContactPage} from "../2023/pages/ContactPage";
import {VideosPage} from "../2023/pages/VideosPage";
import {DirectionsPage} from "../2023/pages/DirectionsPage";
import {DonationsPage} from "../2023/pages/DonationsPage";
import {PageNotFound} from '../shared-components/PageNotFound';

//Error/Success Pages
import {FormSubmitSuccessPage} from "../2023/pages/FormSubmitSuccessPage";
import {FormSubmitErrorPage} from "../2023/pages/FormSubmitErrorPage";


const Route2023 = () => {
    return (
        <Routes>
            <Route element={<Layout2023/>}>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/festival-schedule" element={<FestivalSchedulePage/>} />
                <Route path="/musicians" element={<MusiciansPage/>} />
                <Route path="/contests" element={<ContestPage/>} />
                <Route path="/raffles" element={<RafflesPage/>} />
                <Route path="/seminar" element={<SeminarPage/>} />
                <Route path="/menu" element={<MenuPage/>} />
                <Route path="/sponsors" element={<SponsorsPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/videos" element={<VideosPage/>} />
                <Route path="/form-success" element={<FormSubmitSuccessPage/>} />
                <Route path="/form-error" element={<FormSubmitErrorPage/>} />
                <Route path="/directions" element={<DirectionsPage/>} />
                <Route path="/donations" element={<DonationsPage/>} />
                <Route path='*' element={<PageNotFound/>}/>
            </Route>
        </Routes>
    )
}

export default Route2023