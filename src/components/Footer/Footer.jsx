import React from "react";
import { GoPlus } from "react-icons/go";

const footerData = [
    {
      title: "True Wireless Earbuds",
      features: [
        "Noise Cancellation Earbuds",
        "Gaming Earbuds",
        "Large Playback Earbuds"
      ],
      price: [
        "Earbuds Under 1000",
        "Earbuds Under 2000",
        "Earbuds Under 3000",
        "Earbuds Under 4000",
        "Earbuds Under 5000",
        "Earbuds Above 5000"
      ]
    },
    {
      title: "Wireless Speakers",
      features: [
        "Portable Speakers",
        "Long Playback Speakers",
        "Waterproof Bluetooth Speaker",
        "Party Speakers with RGB Lights",
        "Speaker with Karaoke Mic"
      ],
      price: [
        "Bluetooth Speakers Under 1000",
        "Bluetooth Speakers Under 2000",
        "Bluetooth Speakers Under 3000",
        "Bluetooth Speakers Under 5000",
        "Bluetooth Speakers Under 8000"
      ]
    },
    {
      title: "Trimmers",
      features: [
        "Trimmer for Men",
        "Trimmers with Grooming Kit for Men"
      ],
      price: [
        "Trimmer Under 1000",
        "Trimmer Under 2000"
      ]
    },
    {
      title: "Chargers",
      features: [
        "Wireless Charger",
        "Type C Charger",
        "Fast Charger",
        "USB Charger",
        "Micro USB Charger",
        "Type C Adapter"
      ]
    },
    {
      title: "Wireless Earphones",
      features: [
        "Noise Cancellation Earphone",
        "Long Playback Earphone",
        "Clear Calling Earphone"
      ],
      price: [
        "Neckbands Under 1000",
        "Neckbands Under 2000",
        "Neckbands Under 3000"
      ]
    },
    {
      title: "Soundbars",
      features: [
        "Soundbar with Wireless Subwoofer",
        "Dolby Soundbars",
        "Soundbar with Wired Subwoofer",
        "Alexa Enabled Soundbar"
      ],
      price: [
        "Soundbars Under 10000",
        "Soundbars Under 20000",
        "Soundbars Under 3000",
        "Soundbars Under 5000",
        "Soundbars Above 20000",
      ]
    },
    {
      title: "Limited Editions",
      features: [
        "Limited Editions Headphones",
        "Limited Editions Smart Watch",
        "Limited Editions Earphones",
        "Limited Edition Speakers"
      ]
    },
    {
      title: "Cables",
      features: [
        "Micro USB Cable",
        "C-Type Cable",
        "Lightning Cable",
        "USB C to C Cable",
        "Smart Watch Charging Cable"
      ]
    },
    {
      title: "Wired Earphones",
      features: [
        "Wired Headphones with Mic",
        "Wired Headphones with Mic",
        "Headphones with Mic for PC"
      ],
      price: [
        "Wired Headphones Under 1000",
        "Wired Headphones Under 2000",
        "Wired Headphones Under 3000"
      ]
    },
    {
      title: "Smart Watches",
      features: [
        "Bluetooth Calling Smartwatches",
        "Fitness Tracker Smartwatch",
        "Big Display Smartwatch",
        "Sports Tracker Smartwatch"
      ],
      identity: [
        "Smartwatches for Women/Girls",
        "Smartwatches for Men/Boys"
      ],
      price: [
        "Smartwatch Under 1000",
        "Smartwatch Under 2000",
        "Smartwatch Under 3000",
        "Smartwatch Under 4000",
        "Smartwatch Under 5000",
        "Smartwatch Above 5000"
      ]
    },
    {
      title: "Car Accessories",
      features: [
        "Car Charger",
        "Aux Cable for Car"
      ],
      price: [
        "Car Charger Under 500",
        "Car Charger Above 500",
      ]
    },
    {
      title: "Wireless Headphones",
      features: [
        "Noise Cancelling Headphones",
        "Wireless Gaming Headphone",
        "Long Playback Headphones"
      ],
      price: [
        "Wireless Headphones Under 1000",
        "Wireless Headphones Under 3000",
        "Wireless Headphones Under 2000",
        "Wireless Headphones Under 4000",
        "Wireless Headphones Above 4000"
      ]
    },
    {
      title: "Gaming Headphones",
      features: [
        "Gaming Headphones with Mic",
        "Low Latency Headphones",
        "RGB Light Headphones",
        "Headphones for PC Gaming"
      ]
    },
    {
      title: "Trebel Range",
      features: [
        "Smartwatch for Women",
        "Earbuds for Women",
        "Neckband for Women",
        "Earphone for Women",
        "Headphone for Women"
      ]
    },
    {
      title: "Wired Headphones",
      features: [
        "Wired Headphones with Mic",
        "Wired Headphones with Mic",
        "Headphones with Mic for PC"
      ],
      price: [
        "Wired Headphones Under 1000",
        "Wired Headphones Under 2000",
        "Wired Headphones Under 3000"
      ]
    },
    {
      title: "Powerbanks",
      features: [
        "Power Bank 10000mAh",
        "Power Bank 20000mAh",
        "Mobile Power Bank",
        "Fast Charging Power Bank",
        "Power Bank for iPhone"
      ],
      price: [
        "Power Bank Under 1000",
        "Power Bank Under 1500",
        "Power Bank Under 2000"
      ]
    },
];

const Footer = () => {
  return (
    <div>
        {/* upto 767 */}
        <div className='flex md:hidden flex-col mx-auto bg-[#f7fafc] w-[95%]'>
            <div className="flex flex-col px-4 py-8 gap-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">True Wireless Earbuds</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Wireless Earphones</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Wired Earphones</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Gaming Headphones</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Wireless Speakers</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Soundbars</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Smart Watches</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Trimmers</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Limited Editions</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Car Accessories</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Trebel Range</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Powerbanks</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Chargers</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Cables</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Wireless Headphones</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700">Wired Headphones</h1>
                  <GoPlus className="text-gray-500 font-bold mr-2" size={18}/>
                </div>
            </div>
        </div>

        {/* above 768 */}
        <footer className="hidden md:block bg-[#eff4f7] w-[98%] mx-auto py-10 font-sans">
          <div className="w-[94%] grid grid-cols-4 mx-auto auto-rows-auto gap-x-6 gap-y-4 ">
            {footerData.map((category, index) => (
              <div className="p-2" key={index}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h3>
                
                {category.features && (
                  <>
                    <h4 className="text-sm font-medium text-gray-600 mt-3">Shop by Features</h4>
                    <ul className="list-none p-0">
                      {category.features.map((feature, i) => (
                        <li key={i} className="text-xs text-gray-500 py-1 cursor-pointer">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {category.identity && (
                  <>
                    <h4 className="text-sm font-medium text-gray-600 mt-3">Shop by Identity</h4>
                    <ul className="list-none p-0">
                      {category.identity.map((item, i) => (
                        <li key={i} className="text-xs text-gray-500 py-1 cursor-pointer">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {category.price && (
                  <>
                    <h4 className="text-sm font-medium text-gray-600 mt-3">Shop by Price</h4>
                    <ul className="list-none p-0">
                      {category.price.map((price, i) => (
                        <li key={i} className="text-xs text-gray-500 py-1 cursor-pointer">
                          {price}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </footer>
    </div>
  );
};

export default Footer;