// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {

const [allActors,setAllActors] = useState([]);

const [selectedActor,setSelectedActor] = useState([]);

const [remaining,setRemaining] = useState(0);

const [totalCost,setTotalCost] = useState(0);





useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setAllActors(data))
},[]);





const handleSelectActor = (actor) => {
    const isExist = selectedActor.find(item =>item.id==actor.id);

    let count=actor.salary;

    if(isExist){
        alert("Already Booked")
    }
    else{ 
        selectedActor.forEach((item) => {
            count=count+item.salary;
        })
        const totalRemaining = 20000-count;
        
        if(count > 20000){
          return  alert("Not enough Credit");
        }
        else{
            setTotalCost(count);
            setRemaining(totalRemaining);
            
            
            
            setSelectedActor([...selectedActor,actor]);}
        }
        
   
}

console.log(selectedActor);


    return (
        <div className='container'>
            <div className="home-container">
<div className="card-container">
{
    allActors.map((actor) => (
        // eslint-disable-next-line react/jsx-key
        <div className="card">  
                <img className='photo' src={actor.image} alt="" />
          
            <h2>{actor.name}</h2>
            <p><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, illo!</small></p>
           
             <div className="info">
                <p>salary :{actor.salary}$</p>
                <p>{actor.role}</p>
                </div>
                <button onClick={()=> handleSelectActor(actor)} className='card-btn'>Select</button>
             </div>
    ))
}

</div>
               
             <div className="cart">
                <Cart selectedActor={selectedActor} remaining={remaining} totalCost={totalCost} ></Cart>
             </div>
        </div>
        </div>
    );
};

export default Home;