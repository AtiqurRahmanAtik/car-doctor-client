import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="my-9">
           <h1>This is Home</h1>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           
        </div>
    );
};

export default Home;