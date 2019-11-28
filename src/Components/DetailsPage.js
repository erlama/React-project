import React from 'react';

const brandList = [
    {id: 1, name: "Nike", url: "#"},
    {id: 2, name: "Gant", url: "#"},
    {id: 3, name: "Mango", url: "#"},
    {id: 4, name: "Fila", url: "#"},
]

const DetailsPage = () => ( 
    <div>
        <div>
            <div className="dp-left">
                <h2>Hello</h2>
            </div>
            <div className="dp-right">
                <h2>Hellooo</h2>
            </div>
        </div>
        
        
        <div className="dp-second">
            <h4 className="rek-h4">Rekommenderat för dig</h4>
            <ul className="ul-start">
                {brandList.map(brand => {
                    return <li className="li-start" key={brand.id}>{brand.name}</li>
                })}  
            </ul>
        </div>
    </div>
);
export default DetailsPage;