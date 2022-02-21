import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{basket}, dsipatch] = useStateValue()

  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img 
            className='checkout_ad'
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

            <div>
                <h2 className='checkout_title'>Your Shopping Basket</h2>

                {basket.map( (item, index) => {
                  return <CheckoutProduct
                    key= {index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                  />
                  
                })}

                {/* {Basket item} */}
                {/* {Basket item} */}
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout