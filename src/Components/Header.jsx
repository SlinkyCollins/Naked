import { useEffect, useState } from 'react';
import avatar from "/src/assets/avatar.png";
import SearchIcon from "/src/assets/searchIcon.svg";
import shoppingBasketIcon from "/src/assets/round-shopping-basket.svg";
import "./Header.css";
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const isAddToCartPage = location.pathname === "/addtocart";


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header-container ${isScrolled ? 'scrolled' : ''}`} style={{ background: isAddToCartPage ? "rgba(60, 44, 32, 1)" : "rgba(101, 87, 77, 0.2)", position: isAddToCartPage ? "static" : "fixed" }}>
            <div>
                <h2 className="header-title"><NavLink to="/">N A K E D</NavLink></h2>
            </div>

            <div className="header-nav">
                <ul className="header-menu">
                    <li>Home</li>
                    <li>Collections</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <div className="header-search">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />
                    <span className="search-icon">
                        <img src={SearchIcon} alt="Search" />
                    </span>
                </div>
            </div>

            <div className="header-actions">
                <div className="shopping-basket">
                    <img src={shoppingBasketIcon} alt="Basket" />
                </div>

                <div className="user-info">
                    <img src={avatar} alt="User Avatar" className="user-avatar" />
                    <span>Jess</span>
                </div>
            </div>
        </div>
    );
};

export default Header;