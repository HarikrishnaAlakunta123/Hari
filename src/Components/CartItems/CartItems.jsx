import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContest } from '../../assets/Context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'
function CartItems() {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContest)
  return (
    <div className='CartItems'>
      <div className="Cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Toatl</p>
        <p>Remove</p>

      </div>
      <hr />
      <div>
       
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                     <div className="CartItem-format">
            <img className='carticon-product-icon' src={e.image} alt="" />
            <p>{e.name}</p>
            <p>{e.new_price}</p>
            <button className='Cartitem-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img src="remove_icon" onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
                </div>
            }
        })}
      </div>
    </div>
  )
}

export default CartItems
