import React from 'react';
import logo from './amazon.png';
import './Header.css';
import {  Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {useStateValue} from './StateProvider';




const Header = () => {
    const [{basket},dispatch]= useStateValue();


    return <nav className="header">
        <Link to="/">

        <img
         className="header_logo"
         src= {logo}
         alt="logo"/>

        </Link>
         <div className="header_1">
        <input type="text" className="header_input"/>
        <SearchIcon className="header_search"/>
        </div>

        <div className="header_nav">
            <Link to="/login" className="header_link">
            <div className="header_2">
            <span className="header_option1">Hello,</span>
            <span className="header_option2">Sign In</span>
            </div>
            </Link>
        

     
            <Link to="/" className="header_link">
            <div className="header_2">
            <span  className="header_option1">Returns</span>
            <span className="header_option2">& Orders</span>
            </div>
            </Link>
        


        
            <Link to="/" className="header_link">
            <div className="header_2">
            <span className="header_option1">Your</span>
            <span className="header_option2">Prime</span>
            </div>
            </Link>

            <Link to="/checkout" className="header_link">
            <div className="header_basket">
                <ShoppingBasketOutlinedIcon/>
                <span className="header_option2">{basket?.length}</span>
            
            </div>
            </Link>
            </div>
       





    </nav>;
}



export default Header;