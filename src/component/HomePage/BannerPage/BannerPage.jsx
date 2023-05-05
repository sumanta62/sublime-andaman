import './BannerPage.css'
import govtBus from '../../../assets/Images/go2andaman_baratang_8445-1.4bcbf1572fc4c459a40b.avif'
import privateBus from '../../../assets/Images/Private Bus.ab273cbe25754db28ad2.jpg'


const BannerPage = () => {
    return (
        <div >
            <div className='BannerSection'>
                <div className='BannerBus'>
                    <div className='BannerBusPosition '>
                        <div className='positionImage'>
                            <img src={govtBus} alt="" />
                        </div>
                        <a href="#GovtSTSSection" className='BannerBusTitle'>Inter-Island Govt. <br /> Bus</a>
                    </div>
                    <div className='BannerBusPosition '>
                        <div className='positionImage'>
                            <img src={privateBus} alt="" />
                        </div>
                        <a href='#PrivateInter' className='BannerBusTitle'> <p>Inter-Island Pvt. Bus</p></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BannerPage;