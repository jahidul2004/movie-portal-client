import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const MainLayout = () => {
    return (
        <div>
            {/* Nav Bar */}
            <NavBar></NavBar>

            {/* Slider */}
            <Slider></Slider>

            {/* Outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;