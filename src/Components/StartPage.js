import React from 'react';
import { Card } from "react-bootstrap";
import FirstImg from '../images/main-photo.jpg';
import Fashion1 from '../images/fashion-one.jpg';
import Fashion2 from '../images/fashion-two.jpg';
import Fashion3 from '../images/fashion-three.jpg';
import Fashion4 from '../images/fashion-four.jpg';
import Fashion5 from '../images/fashion-five.jpg';



const StartPage = () => (
    <div className="firstPage-div">
        <div className="first-col">
            <div className="first-left">
                <h3>Welcome</h3>
                <p>Thank you for choosen our website.</p>
                <p>Here you can find everything you ever wanted.</p>
                <p>Just send oss a email if you wonder about anything.</p>
                <p>Happy shopping!</p>
                <button>CTA</button>
            </div>
            <div className="first-right">
                <img src={FirstImg} alt=""/>
            </div>
        </div>
       
        <div className="second-col">
            <div className="second-card">
                <Card style={{ width: '18rem', border: 'none' }}>
                    <Card.Img variant="top" src={Fashion1} />
                    <Card.Body className="body">
                        <Card.Title className="card-title">Woman fashion</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div className="second-card">
                <Card style={{ width: '18rem', border: 'none' }}>
                    <Card.Img variant="top" src={Fashion2} />
                    <Card.Body className="body">
                        <Card.Title className="card-title">Woman fashion</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div className="second-card">
                <Card style={{ width: '18rem', border: 'none' }}>
                    <Card.Img variant="top" src={Fashion3} />
                    <Card.Body className="body">
                        <Card.Title className="card-title">Woman fashion</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="third-col">
            <div className="third-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Fashion4} />
                </Card>
            </div>
            <div className="third-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Fashion5} />
                </Card>
            </div>
        </div>
    </div>
);
export default StartPage;