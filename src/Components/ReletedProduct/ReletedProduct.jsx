import React from 'react'
import './ReletedProduct.css'
import data_product from '../../assets/data'
import Item from '../Items/Item'
function ReletedProduct() {
  return (
    <div className='ReletedProduct'>
      <h1>Releted Product</h1>
      <hr />
      <div className="ReletedProduct-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default ReletedProduct
