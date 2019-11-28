import React from 'react';
import EarthImg from '../images/earth-icon.png';
import FlyImg from '../images/fly-icon.png';
import ShaldImg from '../images/shald-icon.png';
import SmileImg from '../images/smile-icon.png';

const footerFirst = [
    {id: 1, name:"one", text: "Gratis frakt och returer" , url: EarthImg},
    {id: 2, name:"two", text: "Expressfrakt", url: FlyImg},
    {id: 3, name: "three", text: "Säkra betalning ", url: ShaldImg},
    {id: 4, name:"four", text: "Nyheter verja dag", url: SmileImg},
];


const Footer = () => (
    <div className="main-footer">
        <ul className="ul-footer">
            {footerFirst.map(footerItem => {
                return(<div className="footer-fist-div"> 
                            <li className="li-footer" key={footerItem.id}>
                                <img className="img-footer-first" src={footerItem.url} alt=""/>
                            {footerItem.text}</li> 
                        </div>)
            })}  
        </ul>
        <div className="footer-the-parent">
            <div className="footer-parent">
                <div className="footer-child">
                    <label>Shopping</label>
                    <p>Vinter jackor</p>
                    <p>Puffer jackor</p>
                    <p>Kappa</p>
                    <p>Trenchcoats</p>
                </div>
                <div className="footer-child">
                    <label>Mina sidor</label>
                    <p>Mina ordrar</p>
                    <p>Mitt konto</p>
                </div>
                <div className="footer-child">
                    <label>Kundtjänst</label>
                    <p>Returnpolicy</p>
                    <p>Integritetpolicy</p>
                </div>
            </div>
            <div className="footer-parent2">
                <div className="footer-child2">
                    <label>Välj land och språk</label>
                    <p>Land</p>
                    <select className="select-footer">
                        <option value="Sverige" defaultValue>Svenrige</option>
                        <option value="Danmark">Danmark</option>
                        <option value="Norge">Norge</option>
                        <option value="England">England</option>
                    </select>
                    <p>Språk</p>
                    <select className="select-footer">
                        <option value="Svenska" defaultValue>Svenska</option>
                        <option value="Danska">Danska</option>
                        <option value="Norska">Norska</option>
                        <option value="Engelska">Engelska</option>
                    </select>
                </div>
            </div>
        </div>  
        <div className="App copy-footer">
            <p>Copyright 2019 NA-KD</p>
        </div> 
    </div>
    
);
export default Footer;