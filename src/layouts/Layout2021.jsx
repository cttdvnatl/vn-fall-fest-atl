import { Outlet } from "react-router-dom";
import {Header} from '../2021/components/Header';
import {Footer} from '../2021/components/Footer';

import "../2021/css/style.css"

export const Layout2021 = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
};