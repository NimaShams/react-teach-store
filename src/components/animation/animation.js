import React,{useState} from 'react';
import Button from '../UI/button/button';
const Animation = () =>{
    const[slideState,setSlide] = useState(false);
    const [flipState,setFlip] = useState(1);
    const onSlide=()=>{
        setSlide(true);
    }
    const onFlip=()=>{
    }
    return(
        <div className={`box ${slideState ? 'slide' : 'null'}`}>
            <h1>انیمیشن</h1>
            <div style={{display:'flex'}}>
                <Button btnType="danger" clicked={onSlide}>Flip</Button>
                <Button btnType="danger" clicked={onFlip}>slide</Button>
            </div>
        </div>
    )

}

export default Animation;