import React from 'react'
import AnnounceBar from '../../components/layout/AnnounceBar/AnnounceBar';
import BoatSection from '../../components/layout/BoatSection/BoatSection';
import Carousel from '../Homepage/Carousel';
import SaleLive from '../Homepage/SaleLive';
import CTA from '../Homepage/CTA';
import ProductsList from '../Homepage/ProductsList';
import CategoriesList from '../Homepage/CategoriesList';
import TopPicksForYou from '../Homepage/TopPicksForYou';
import CollectionsSlider from '../Homepage/CollectionsSlider';
import RecentlyViewed from '../Homepage/RecentlyViewed';
import ShopByLifeStyle from '../Homepage/ShopByLifeStyle';
import BestOfBoat from '../Homepage/BestOfBoat';
import JoinTheTribe from '../Homepage/JoinTheTribe';
import BlogSlider from '../Homepage/BlogSlider';
import NewsLater from '../Homepage/NewsLater';
import Footer from '../../components/layout/Footer/Footer';
import Subscribe from '../Homepage/Subscribe';
import Socialicon from '../Homepage/Socialicon';
import Whatsapp from '../../assets/whtsapp.avif';
import message from '../../assets/message_icon.avif';
import gift from '../../assets/rewards.webp';
import personalisation from '../../assets/personalisation.avif'

const Home = () => {
  return (
    <div>
        <AnnounceBar/>
        <BoatSection/>
        <Carousel/>
        <SaleLive/>
        <CTA/>
        <ProductsList/>
        <CategoriesList/>
        <CollectionsSlider/>
        <TopPicksForYou/>
        <RecentlyViewed/>
        <ShopByLifeStyle/>
        <BestOfBoat/>
        <JoinTheTribe/>
        <BlogSlider/>
        <NewsLater/>
        <Subscribe/>
        <Footer/>
        <Socialicon/>

         {/* Fixed WhatsApp & Message Icons */}

         {/* above bm (1000px) */}
        <div className="fixed bottom-3 right-3 bm:flex hidden flex-col gap-1 z-40">
          <a 
            href="https://www.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-110"
          >
            <img src={Whatsapp} className='rounded-full' alt="WhatsApp" />
          </a>
          <a 
            href="https://www.google.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          >
            <img src={message} className='rounded-full' alt="Message" />
          </a>
        </div>

         {/* 768px to 999px */}
        <div className="fixed bottom-3 right-3 hidden md:flex bm:hidden flex-col gap-3 z-40">
          <a 
            href="https://www.google.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          >
            <img src={message} className='rounded-full' alt="Message" />
          </a>
        </div>

         {/* 0px to 740px */}
        <div className='flex bw:hidden mt-10 '>
            <div className='w-full'> {/* max-w-1400px apply hear */}
              <div style={{"box-shadow": "0px 0px 12px 2px rgba(224,215,224,1)"}} className='h-14 w-[100%] flex justify-evenly items-center mx-auto mb-2'>
                  
                  <div className='flex flex-col cursor-pointer items-center justify-center'>
                    <p>
                      <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 23.52 21.02">
                        <defs>
                          <style>
                            .cls-1 {
                              // fill: #1a2024;
                              // stroke-width: 0px;
                            }
                          </style>
                        </defs>
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path class="cls-1" d="M23.22,7.68s0-.01-.02-.02l-.38-.28L13.38.52c-.97-.7-2.27-.7-3.24,0L2.11,6.36l-1.79,1.3c-.34.24-.42.71-.19,1.05.24.34.71.42,1.05.18,0,0,.01,0,.02,0l.91-.66.9-.66v10.71c0,1.52,1.23,2.75,2.75,2.75h12c1.52,0,2.75-1.23,2.75-2.75V7.57l1.81,1.32c.15.11.33.16.5.14.21,0,.41-.1.55-.29.25-.33.18-.8-.15-1.05ZM14.01,19.52h-4.5v-6.25c0-.69.56-1.25,1.25-1.25h2c.69,0,1.25.56,1.25,1.25v6.25Z"></path>
                        </g>
                      </svg>
                    </p>
                    <h1 className='underline decoration-red-500 decoration-2 text-xs font-bold'>Home</h1>
                  </div>

                  <div className='flex flex-col cursor-pointer items-center justify-center'>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                        <g id="Group_334289" data-name="Group 334289" transform="translate(7827 572)">
                          <rect id="Rectangle_114330" data-name="Rectangle 114330" width="28" height="28" transform="translate(-7827 -572)" fill="none"></rect>
                          <path id="Vector" d="M2.75,1.5h4V0h-4ZM8,2.75v4H9.5v-4ZM6.75,8h-4V9.5h4ZM1.5,6.75v-4H0v4ZM2.75,8A1.25,1.25,0,0,1,1.5,6.75H0A2.75,2.75,0,0,0,2.75,9.5ZM8,6.75A1.25,1.25,0,0,1,6.75,8V9.5A2.75,2.75,0,0,0,9.5,6.75ZM6.75,1.5A1.25,1.25,0,0,1,8,2.75H9.5A2.75,2.75,0,0,0,6.75,0ZM2.75,0A2.75,2.75,0,0,0,0,2.75H1.5A1.25,1.25,0,0,1,2.75,1.5ZM20,4.75A3.25,3.25,0,0,1,16.75,8V9.5A4.75,4.75,0,0,0,21.5,4.75ZM16.75,8A3.25,3.25,0,0,1,13.5,4.75H12A4.75,4.75,0,0,0,16.75,9.5ZM13.5,4.75A3.25,3.25,0,0,1,16.75,1.5V0A4.75,4.75,0,0,0,12,4.75ZM16.75,1.5A3.25,3.25,0,0,1,20,4.75h1.5A4.75,4.75,0,0,0,16.75,0ZM8,16.75A3.25,3.25,0,0,1,4.75,20v1.5A4.75,4.75,0,0,0,9.5,16.75ZM4.75,20A3.25,3.25,0,0,1,1.5,16.75H0A4.75,4.75,0,0,0,4.75,21.5ZM1.5,16.75A3.25,3.25,0,0,1,4.75,13.5V12A4.75,4.75,0,0,0,0,16.75ZM4.75,13.5A3.25,3.25,0,0,1,8,16.75H9.5A4.75,4.75,0,0,0,4.75,12Zm10,0h4V12h-4ZM20,14.75v4h1.5v-4ZM18.75,20h-4v1.5h4ZM13.5,18.75v-4H12v4ZM14.75,20a1.25,1.25,0,0,1-1.25-1.25H12a2.75,2.75,0,0,0,2.75,2.75ZM20,18.75A1.25,1.25,0,0,1,18.75,20v1.5a2.75,2.75,0,0,0,2.75-2.75ZM18.75,13.5A1.25,1.25,0,0,1,20,14.75h1.5A2.75,2.75,0,0,0,18.75,12Zm-4-1.5A2.75,2.75,0,0,0,12,14.75h1.5a1.25,1.25,0,0,1,1.25-1.25Z" transform="translate(-7824 -569.25)" fill="#1a2024"></path>
                        </g>
                      </svg>
                    </p>
                    <h1 className='text-xs font-semibold'>Categories</h1>
                  </div>

                  <div className='flex flex-col cursor-pointer items-center justify-center'>
                    <img src={gift} width={30} alt='gift'/>
                    <h1 className='text-xs font-semibold'>Rewards</h1>
                  </div>

                  <div className='flex flex-col cursor-pointer items-center justify-center'>
                    <img src={personalisation} width={32} alt='personalisation'/>
                    <h1 className='text-[10px] font-semibold'>Personalisation</h1>
                  </div>

                  <div className='flex flex-col cursor-pointer items-center justify-center'>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                        <g id="Group_334287" data-name="Group 334287" transform="translate(7687 572)">
                          <rect id="Rectangle_114332" data-name="Rectangle 114332" width="28" height="28" transform="translate(-7687 -572)" fill="none"></rect>
                          <g id="Group_334286" data-name="Group 334286" transform="translate(-1493.774 -411)">
                            <path id="Digital_Inline_White" d="M11.581,0A11.49,11.49,0,0,0,1.629,17.225L0,23.176l6.088-1.6a11.474,11.474,0,0,0,5.488,1.4h0A11.489,11.489,0,0,0,11.581,0Zm0,21.038h0a9.528,9.528,0,0,1-4.858-1.331L6.37,19.5l-3.612.948.964-3.522-.227-.361a9.545,9.545,0,1,1,8.086,4.473Z" transform="translate(-6190.226 -159)" fill="#1a2024" stroke="#fff" stroke-width="0.5"></path>
                            <path id="Digital_Inline_White-2" data-name="Digital_Inline_White" d="M17.547,14.507c-.3-.149-1.765-.871-2.039-.971s-.473-.149-.672.149-.771.971-.944,1.17-.348.224-.646.075a8.157,8.157,0,0,1-2.4-1.481,8.974,8.974,0,0,1-1.66-2.067c-.174-.3-.019-.46.131-.609.134-.133.3-.348.447-.523a2.017,2.017,0,0,0,.3-.5.55.55,0,0,0-.025-.523c-.075-.149-.672-1.618-.92-2.216-.242-.581-.488-.5-.672-.512s-.373-.01-.572-.01a1.1,1.1,0,0,0-.8.373A3.346,3.346,0,0,0,6.034,9.353,5.808,5.808,0,0,0,7.252,12.44a13.3,13.3,0,0,0,5.1,4.505,17.208,17.208,0,0,0,1.7.628,4.093,4.093,0,0,0,1.879.118,3.073,3.073,0,0,0,2.014-1.419,2.494,2.494,0,0,0,.174-1.419c-.075-.124-.274-.2-.572-.348Z" transform="translate(-6190.747 -159.527)" fill="#1a2024"></path>
                          </g>
                        </g>
                      </svg>
                    </p>
                    <h1 className='text-xs font-semibold'>Chat</h1>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home;