/* how to update state of an object in react */
import React, {useState} from 'react';

function Component() {

    const [car, setCar] = useState({year:2020, 
                                   make:"lamborgini",
                                   model:"aventador"});
    function handleYearChange(event) {
        // using spread operator
        /* this is how spread operator actually looks
           if you have object properties with same names
           the javascript considers the later one or 
           latest one and other will be discarded */
           setCar({year:2020,
                make:"lamborgini",
                model:"aventador",
                year: 2025});
    }
    function handleMakeChange(event) {
        
    }
    function handleModelChange(event) {

    }
    return(<div>
               <p> your favorite car: 
                {car.year} {car.make} {car.model} </p>
                <input type="number" 
                       value={car.year} 
                       onChange={handleYearChange} /> 
                <input type="text" 
                       value={car.make}
                       onChange={handleMakeChange} />
                <input type="text" 
                       value={car.model}
                       onChange={handleModelChange} />
           </div>);
   
}
export default Component









