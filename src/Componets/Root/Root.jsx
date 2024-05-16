import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";


const Root = () => {
    return (
        <div>
            <div className="my-9 container mx-auto">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            </div>

            <div>

            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;