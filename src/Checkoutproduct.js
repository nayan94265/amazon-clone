import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';
import './Checkoutproduct.css'


const Checkoutproduct = (props) => {
    const [{basket},dispatch]= useStateValue();

    const removefrombasket = ()=>{
        dispatch({
            type:"Remove_from_Basket",
            id:props.id,
            
        });

    };


    return <div className="checkoutproduct" style={{maxWidth:'500px'}}>
        <img className="checkoutproduct_image" src={props.image}/>

        <div className="checkoutproduct_info">
            <p className="checkoutproduct_title">{props.name}</p>
            <p>{props.info}</p>
            <p className="checkoutproduct_price">
            <small>$</small>
            <strong>{props.price}</strong>
            </p> 
            
            <button  className="removeproduct_but" onClick={removefrombasket} >Remove from Basket</button>
            
       


        </div>

    
    </div>;
}



export default Checkoutproduct;