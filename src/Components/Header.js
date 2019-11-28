import React from 'react';
import SearchImg from '../images/search-icon.png';
import CartImg from '../images/cart-icon.png';
import HeartImg from '../images/heart-icon.png';
import EyeImg from '../images/eye-icon.png';
import HeadImg from '../images/NA-KD-icon.png';

const Header = () => (
    <div>
        <header>
            <div>
                <div className="nav-left">
                   <a href="/"><img className="img-left-one" src={HeadImg} alt=""></img></a> 
                    <img className="img-left-two" src={SearchImg} alt=""></img>
                    <input className="input-left" type="text" placeholder=" Search"></input>
                </div>
                <div className="nav-right">
                    <select className="select-right">
                        <option value="Svenska" defaultValue>Svenska</option>
                        <option value="Danska">Danska</option>
                        <option value="Norska">Norska</option>
                        <option value="Engelska">Engelska</option>
                    </select>
                    <img className="img-right" src={EyeImg} alt=""></img>
                    <img className="img-right" src={HeartImg} alt=""></img>
                    <img className="img-right" src={CartImg} alt=""></img>                
                </div> 
            </div>    
        </header>  
    </div>
);
export default Header;