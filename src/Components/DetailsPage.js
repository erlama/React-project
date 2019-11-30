import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Logo from "../images/dp-photo.jpg";

const brandList = [
    {id: 1, name: "Nike", url: "#"},
    {id: 2, name: "Gant", url: "#"},
    {id: 3, name: "Mango", url: "#"},
    {id: 4, name: "Fila", url: "#"},
]

const DetailsPage = () => ( 
    <div >
        <Row className="dp-main-div">
            <Col className="dp-left" xs lg={4} >
                <img src={Logo}/>
            </Col>
            <Col className="dp-right"> 
                <h2>Berlin shirt cream</h2>
                <p>Art nr: 1644-000003-0001</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Voluptas libero sapiente hic perspiciatis, </p>
                <p>quis iste similique quibusdam non saepe! </p>
                <p>Vel vitae explicabo quis nesciunt autem quod nulla fuga hic eum?</p>
                <h3>499 SEK</h3>
                <h5>Chooes color</h5>
                <input type="radio" name="gender" value="White"/> White
                <input type="radio" name="gender" value="Black"/> Black
                <input type="radio" name="gender" value="Pink"/> Pink 
                <h5>Chooes size</h5>
                <select>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
                <br/>
                <Button variant="outline-dark">Buy</Button>
                <Button variant="outline-dark">Save</Button>
            </Col>
        </Row>
    </div>


    // <div>
    //     <div>
    //         <div className="dp-left">
    //             <h2>Hello</h2>
    //         </div>
    //         <div className="dp-right">
    //             <h2>Hellooo</h2>
    //         </div>
    //     </div>
        
        
    //     <div className="dp-second">
    //         <h4 className="rek-h4">Rekommenderat för dig</h4>
    //         <ul className="ul-start">
    //             {brandList.map(brand => {
    //                 return <li className="li-start" key={brand.id}>{brand.name}</li>
    //             })}  
    //         </ul>
    //     </div>
    // </div>
);
export default DetailsPage;