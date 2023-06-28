import { Outlet } from "react-router-dom";
import {Header} from '../2022/components/Header';
import {Footer} from '../2022/components/Footer';

import "../2022/css/style.css"

export const Layout2022 = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
};