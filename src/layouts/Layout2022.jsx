import { Outlet } from "react-router-dom";
import {Header} from '../2022/components/Header';
import {Footer} from '../2022/components/Footer';
export const Layout2022 = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
};