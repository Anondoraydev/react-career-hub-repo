import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CatagoryList from "../CatagoryList/CatagoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

 
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner />
            <CatagoryList />
            <FeaturedJobs/>
        </div>
    );
};

export default Home;