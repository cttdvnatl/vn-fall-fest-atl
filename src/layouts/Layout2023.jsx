import { Outlet } from "react-router-dom";
import {Header} from '../2022/components/Header';
import {Footer} from '../2022/components/Footer';

export const Layout2023 = () => {
  return (
    <div>
      2023
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
};