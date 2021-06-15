import React  ,{ useState } from 'react';
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';

const Product = (props) => {

    const [{},dispatch]= useStateValue();
    

    const addtobasket =()=>{

      
        dispatch({
            type:'Add_to_Basket',
            item:{
                id:props.id,
                name:props.name,
                info:props.info,
                image:props.image,
                price:props.price,
                rating:props.rating,

            }
        })

    };
    return <div className="product" 
    >
        <div className="product_info">
        <p>{props.info}</p>
        <p style={{fontSize:'17px',fontWeight:'800'}}><b>{props.name}</b></p>
        <p className="product_price">
        <small>$</small>
        <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
            {
                Array(props.rating)
                .fill()
                .map((_) =>
                (
                    <p><StarIcon/></p>
                ))
            }

        </div>
        </div>
        
     
        <img className="product_image" src={props.image}/>

        
        <button onClick={()=>{addtobasket()} } className="product_but">Add to Card</button>

   
        



    </div>;
}

export default Product;