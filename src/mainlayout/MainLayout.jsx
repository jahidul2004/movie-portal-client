import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* Nav Bar */}
            <NavBar></NavBar>

            {/* Outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;