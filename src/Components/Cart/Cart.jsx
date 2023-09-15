// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = ({selectedActor,remaining,totalCost}) => {
    // eslint-disable-next-line react/prop-types
   console.log(selectedActor);
    return (
        <div>
            <h5>Total Actors :{selectedActor.length}</h5>
            <h5>Remaining :{remaining}</h5>
            <h5>Total Cost :{totalCost}</h5>
          {
            // eslint-disable-next-line react/prop-types
            selectedActor.map((actor) =>(
              
                // eslint-disable-next-line react/jsx-key
                <li key={actor.id}>{actor.name}</li>
            ))
          }
            
        </div>
    );
};

export default Cart;