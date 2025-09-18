
import CartPage from '../AddToCart/CartPage';
import GameTopUp from './HomeSectionCard/GameTopUp';
import Homeslider from './HomeSlider/Homeslider';


const MainPage = () => {
    return (
        <div className="col-span-12 w-full" >
            <div className="transparents bg-bgtransparent/70 max-w-screen">
                <Homeslider />
                <GameTopUp/>
                
            </div>
        </div>
    );
};

export default MainPage;