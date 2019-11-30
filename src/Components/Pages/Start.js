import React from 'react';
// import { Card } from "react-bootstrap";
import Fashion1 from '../../images/fashion-one.jpg';
import Fashion2 from '../../images/fashion-two.jpg';
import Fashion3 from '../../images/fashion-three.jpg';
import Fashion4 from '../../images/fashion-four.jpg';
import Fashion5 from '../../images/fashion-five.jpg';
import WWide from '../../images/woman.jpg'


const start = () => (
   <div>
        <div className="clearfix">
            <div className="fp-1 float-sm-right pr-5">
                <img className="card-img img-fluid" src={WWide} alt=""/>
            </div>
            <div className="float-sm-left pl-6">
                <h2>Welcome</h2>
                <p>Welcome to amazing weebsite</p>
                <p>Here you can buy clothes for woman</p>
                <p>Hope you enjoy it!!</p>
                <button>Read more</button>
            </div>
        </div>
        <div className="card-columns fp-2">
            <div className="card p-5 border-0 float-md-left">
                <img className="card-img-top img-fluid" src={Fashion1} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Shirts</h4>
                </div>
            </div>
            <div className="card p-5 border-0 float-md-left">
                <img className="card-img-top img-fluid" src={Fashion2} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Pants</h4>
                </div>
            </div>
            <div className="card p-5 border-0 float-md-left">
                <img className="card-img-top img-fluid" src={Fashion3} alt=""/>
                <div className="card-body">
                    <h4 className="card-title text-lg-2">Style</h4>
                </div>
            </div>
        </div>
        <div className="clearfix">
            <div className="fp-3 float-xl-left pl-5">
                <img className="img-fluid" src={Fashion4} alt=""/>
            </div>
            <div className="fp-4 float-xl-right pr-5">
                <img className="img-fluid" src={Fashion5} alt=""/>
            </div>
        </div>
   </div>
)
export default start;