import GameTopUp from "./HomeSectionCard/GameTopUp";
import Homeslider from "./HomeSlider/Homeslider";
import GiftCard from "./HomeSectionCard/GiftCard";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Home| UniQbd</title>
        <meta
          name="description"
          content="Manage users, content, and settings."
        />
        <meta name="keywords" content="UniQbd admin, dashboard, management" />
      </Helmet>
      <div className="col-span-12 w-full">
        <div
          className="transparents bg-bgtransparent/70 
            max-w-screen"
        >
          <Homeslider />
          <GameTopUp />
          <GiftCard />
        </div>
      </div>
    </>
  );
};

export default MainPage;
