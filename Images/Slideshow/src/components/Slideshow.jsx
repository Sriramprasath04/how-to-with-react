import { useState } from 'react';
import {images} from '../utils/images'
import Arrow from '/arrow1.png';

const Slideshow = ()=>{
    const [indx, setIndx] = useState(0);

    return (
        <div className="slide-show-container">
            <div className='arrow left' onClick={
                ()=>{
                    setIndx(indx === 0? images.length-1 : indx-1)
                }
            }>
                <img src={Arrow}/>
            </div>

            <div className='image-container'>
                {
                    <img src={images[indx]} key={indx} className='image'/>
                }
            </div>
            
            <div className='arrow right' onClick={
                () =>{
                    setIndx(indx === images.length-1? 0 : indx+1);
                }
            }>
                <img src={Arrow}/>
            </div>
        </div>
    );
}

export default Slideshow;