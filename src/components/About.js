import React from 'react';
import Rainbow from './hoc/Rainbow'
const About = ()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corrupti sed explicabo illo ullam ipsam doloribus atque quisquam quidem quos libero sapiente pariatur architecto ab dicta nobis placeat officia quam!</p>
            
        </div>
    )
}

export default Rainbow(About)