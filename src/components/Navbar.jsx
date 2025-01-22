import {appleImg, bagImg, searchImg} from '../utils';
import {navLists} from '../constants';
// import React, { useState } from "react";
import  { useState } from "react";
import "./App.css";


const Navbar = () => {

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const quickLinks = [
      { name: "Find a Store", url: "/find-store" },
      { name: "Apple Vision Pro", url: "/apple-vision-pro" },
      { name: "AirPods", url: "/airpods" },
      { name: "Apple Intelligence", url: "/apple-intelligence" },
      { name: "Apple Trade In", url: "/apple-trade-in" },
    ];
    
  return (



    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full">
            <a href='https://www.apple.com/'>
                <img src={appleImg} alt="Appleimg"  width={14} height={18}/>
            </a>
        <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav )=>
            (
                <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' >
                    {nav}
                </div>
            ))}
        </div>
    <div className='flex items-baseline  gap-7 max-sm:justify-end max-sm:flex-1'>
           {/* Search Button */}
      <button className="search-icon flex " onClick={() => setIsSearchVisible(true)}>
      <img src={searchImg} alt="search" className='black hover:opacity-85' width={18} height={18}></img>
      </button>

      {/* Search Overlay */}
      {isSearchVisible && (
        <div className="search-overlay">
          <div className="search-header">
            <h2><img src={searchImg}  alt="search" width={18} height={18}></img></h2>
            <button
              className="close-button hover:opacity-85"
              onClick={() => setIsSearchVisible(false)}
            >
              ✖
            </button>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>→ {link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
         
        )}
           
            
        <img src={bagImg} alt="bag"  className="mb-1 hover:opacity-85" width={18} height={18}></img>
    </div>
        </nav>
    </header>
  )
}

export default Navbar