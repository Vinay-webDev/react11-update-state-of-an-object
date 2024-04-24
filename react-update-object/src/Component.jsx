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
        /* it's always a good practice to have updater
           function when we are dependent on previous state*/
           // remeber to use () 
           // use c to previous state
        /* now let's implement our onChange event handler 
           to update it's value in real time */
           setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
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









