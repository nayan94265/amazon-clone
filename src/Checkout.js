import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import Header from './Header';
import { CheckOutlined } from '@material-ui/icons';
import Checkoutproduct from './Checkoutproduct';



const Checkout = (props) => {

    const [{basket},dispatch]= useStateValue();
    return <div className="checkout">
        <Header/>
        <img className="checkout_image"   src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Diwali17/Monday1/v1/load_750x375_2.jpg"
        style={{ width:'900px',marginBottom:'10px',maxHeight:'200px'}}
        />
        
        
        {basket?.length == 0 ? (

            <div>
                <h2>Your basket is empty</h2>
            </div>
        ):(
            <div>
            <h2 className="checkout_title" >Your Shopping Basket ({basket?.length})</h2>
            {basket.map(item => (
               
                <Checkoutproduct
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  info={item.info}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />

            ))}
            </div>
        )}
    </div>;
}

export default Checkout;