
import GameTopUp from './HomeSectionCard/GameTopUp';
import Homeslider from './HomeSlider/Homeslider';
import GiftCard from './HomeSectionCard/GiftCard';


const MainPage = () => {
    return (
        <div className="col-span-12 w-full" >
            <div className="transparents bg-bgtransparent/70 max-w-screen">
                <Homeslider />
                <GameTopUp/>
                <GiftCard/>
            </div>
        </div>
    );
};

export default MainPage;