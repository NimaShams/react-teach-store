import React,{useState} from 'react';
import './animation.css';
import Button from '../UI/button/button';

const styles={
    transition : 'all 1s ease-out'
}

const Transition = () =>{
    const[opacityState,setOpacity] = useState(1);
    const [scaleState,setScale] = useState(1);
    const onHide=()=>{
        setOpacity(0);
    }
    const onSclae=()=>{
        setScale(scaleState>1?1:1.2)
    }
    return(
        <div className="Box" style={{...styles,opacity:opacityState,transform:`scale(${scaleState})`}}>
            <h1>انیمیشن</h1>
            <div style={{display:'flex'}}>
                <Button btnType="danger" clicked={onHide}>Hide</Button>
                <Button btnType="danger" clicked={onSclae}>Scale</Button>
            </div>
        </div>
    )

}

export default Transition;