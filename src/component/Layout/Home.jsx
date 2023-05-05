import BannerPage from '../HomePage/BannerPage/BannerPage';
import GovtSTS from '../HomePage/Govt-STS/GovtSTS';
import Navbar from '../HomePage/Navbar/Navbar';
import PrivateInter from '../HomePage/PrivateInter/PrivateInter';

const Home = () => {
    return (
        <div >
            <Navbar/>
            <BannerPage></BannerPage>
            <GovtSTS></GovtSTS>
            <PrivateInter></PrivateInter>
        </div>
    );
};

export default Home;