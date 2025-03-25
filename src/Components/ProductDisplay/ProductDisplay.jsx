import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { ShopContest } from '../../assets/Context/ShopContext'
const ProductDisplay = (props)=> {
const {product} = props;
const{addToCart} = useContext(ShopContest);
  return (
    <div className='Productdisplay'>
      <div className="Productdisplay-left">
<div className="Productdisplay-img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
</div>
<div className="Productdisplay-img">
    <img className='Productdisplay-main-img' src={product.image} alt="" />
</div>
      </div>
      <div className="Productdisplay-right">
<h1>{product.name}</h1>
<div className="Productdisplay-right-star">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
    <p>(122)</p>
</div>
<div className="Productdisplay-right-prices">
    <div className="Productdisplay-right-price-old">
        ${product.old_price}
    </div>
    <div className="Productdisplay-right-price-new">
        ${product.new_price}
    </div>
</div>
<div className="Productdisplay-right-desc">
    A lightweight, usually knitted, pullover shirt,close-fitting ans a round neckline and shorts sleeves, worn as an undershirt or outer grament
</div>
<div className="Productdisplay-right-size">
    <h1>Select Size</h1>
    <div className="Productdisplay-right-sizes">
        <div>S</div>
        <div>M</div>
        <div>l</div>
        <div>XL</div>
        <div>XXL</div>
    </div>
</div>
<button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
<p className='productdisplay-right-category'><span>Category</span>Women, T-SHIRT, CROP TOP</p>
<p className='productdisplay-right-category'><span>Category</span>MODERN, LATEST</p>
      </div>
    </div>
  )
}

export default ProductDisplay
