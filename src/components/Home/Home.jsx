import React from 'react'
import Welcomes from '../Welcomes/Welcomes';
import BoatSection from '../BoatSection/BoatSection';
import Scrollbar from '../Scrollbar/Scrollbar';
import SaleLive from '../SaleLive/SaleLive';
import RepublicDay from '../RepublicDay/RepublicDay';
import RepublicDeals from '../RepublicDeals/RepublicDeals';
import ShopByCategories from '../ShopByCategories/ShopByCategories';
import TopPicksForYou from '../TopPicksForYou/TopPicksForYou';
import Bestsellers from '../BestSeller/BestSeller';
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed';
import ShopByLifeStyle from '../ShopByLifestyle/ShopByLifeStyle';
import BestOfBoat from '../BestOfBoat/BestOfBoat';
import JoinTheTribe from '../JoinTheTribe/JoinTheTribe';
import Blogs from '../Blogs/Blogs';
import InThePress from '../InThePress/InThePress';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import Socialicon from '../Socialicon/Socialicon';

const Home = () => {
  return (
    <div>
        <Welcomes/>
        <BoatSection/>
        <Scrollbar/>
        <SaleLive/>
        <RepublicDay/>
        <RepublicDeals/>
        <ShopByCategories/>
        <Bestsellers/>
        <TopPicksForYou/>
        <RecentlyViewed/>
        <ShopByLifeStyle/>
        <BestOfBoat/>
        <JoinTheTribe/>
        <Blogs/>
        <InThePress/>
        <Subscribe/>
        <Footer/>
        <Socialicon/>
    </div>
  )
}

export default Home;