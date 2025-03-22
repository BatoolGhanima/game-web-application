

import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { Theme } from "./Theme";
import { Link } from "react-router-dom";
import gameLogo from '../assets/images/gameLogo.png'
import { IoHome, IoGameController, IoInformationCircleSharp } from "react-icons/io5";
import { HiOutlineViewList } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import '../styles/navbarStyle.css'
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

//navbar component
//this component is used to show the navbar in the home page and in the game details page
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSearchOpen, setSearchOpen] = useState(false)
    const [isFavoriteOpen, setIsFavoriteOpen] = useState(false)

    return (
        <>
            <nav className="navbar">

                {/* Logo Section */}
                <button
                        className="nav-switch md:hidden"
                        onClick={() => setIsOpen(!isOpen)}>
                        <HiOutlineViewList />
                    </button>
                <Link to={'/'}>
                    <div>
                        <Logo image={gameLogo} text="gamp app header" className="logo " />
                    </div>
                </Link>
                
                {/* link */}
                <div className="container-links" >
                    <div className="links"> <Link to={'/'}> Home </Link> <span></span> </div>
                    <div className="links"> <Link to={'/mainContent'}>Games </Link> <span></span> </div>
                    <div className="links"> <Link to={'/sidebar'}>About </Link> <span></span> </div>
                </div>



                <div className="flex items-center">
                <div className="favorite-btn mx-4">
                        <Link to={'/favorite'}>
                            <button
                                onClick={() => setIsFavoriteOpen(!isFavoriteOpen)}
                            >
                                <FaHeart size={24} fill="white" />
                            </button>
                        </Link>
                      
                    </div>
                    {/* Search Section */}
                    <div className="">
                        <span className="searchIcon" onClick={() => { setSearchOpen(!isSearchOpen) }} >
                            {
                                isSearchOpen ? ( 
                                  <span className="hidden"><IoIosSearch /> </span>  
                                ):(
                                    <span className="block"><IoIosSearch /> </span>  

                                )
                            }
                            
                        </span>

                        {
                            isSearchOpen && (
                    <div className="flex items-center">
                                    <SearchInput />
                                    <IoIosSearch size={30} fill="white" onClick={ ()=> setSearchOpen(!isSearchOpen)} />         
                    </div>
                                    
                                
                               
                            )
                        }

                    </div>


                    {/* mobile menu  button */}
                   


                    {/* Favorite Button */}
                 

                    {/* Theme Toggle Section */}
                    <div className="hidden md:block">
                      <Theme></Theme>  
</div>
                    
                </div>

                            
          

                {/* mobile menu  */}
                {
                    isOpen && (

                        <div className="mobile-menu" >
                            <div className="links" onClick={() => setIsOpen(false)}>  <span> <IoHome />  </span>  <Link to={'/'}>   Home </Link>  </div>
                            <div className="links" onClick={() => setIsOpen(false)}>  <span> <IoGameController />
                            </span> <Link to={'/mainContent'}> Games </Link>  </div>
                            <div className="links" onClick={() => setIsOpen(false)}>  <span>  <IoInformationCircleSharp /> </span> <Link to={'/sidebar'}> About </Link> </div>
                              <Theme></Theme>
                        </div>
                    )
                }
            </nav>

        </>
    );
};

export default NavBar;
