import Banner from "../Banner/Banner";
import CatagoryList from "../CatagoryList/CatagoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

 
const Home = () => {
    return (
        <div>
            <Banner />
            <CatagoryList />
            <FeaturedJobs/>
        </div>
    );
};

export default Home;