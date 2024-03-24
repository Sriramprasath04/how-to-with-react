import { useState } from 'react';
import {images} from '../utils/images'
import Arrow from '/arrow1.png';

const Slideshow = ()=>{
    const [indx, setIndx] = useState(0);

    const back = ()=>{
        setIndx(indx === 0? images.length-1 : indx-1)
    }
    
    const frwd = () =>{
        setIndx(indx === images.length1-1? 0 : indx+1);
    }

    return (
        <div className="slide-show-container">
            <div className='arrow left'>
                <img src={Arrow} onClick={back()}/>
            </div>

            {
                <img src={images[indx]} key={indx} className='image'/>
            }
            
            <div className='arrow right'>
                <img src={Arrow} onClick={frwd()}/>
            </div>
        </div>
    );
}

export default Slideshow;