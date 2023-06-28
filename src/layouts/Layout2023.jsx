import { Outlet } from "react-router-dom";
import {Header} from '../2023/components/Header';
import {Footer} from '../2023/components/Footer';

export const Layout2023 = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
};