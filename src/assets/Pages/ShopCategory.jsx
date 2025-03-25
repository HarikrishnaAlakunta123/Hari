import React, { useContext } from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContest } from '../Context/ShopContext';
import dropdown_icon from '../../assets/dropdown_icon.png'
import Item from '../../Components/Items/Item';
const ShopCategory= (props) => {
  const {all_product} = useContext(ShopContest);
  return (
    <div className='shop-category'>
    <img className='shopcategory-banner' src={props.banner} alt="" />
    <div className="shopcategory-indexsort">
      <p>
        <span>Showing 1-12</span>out of 36 products
      </p>
      <div className="shopcategory-sort">
        <img src={dropdown_icon} alt="" />
      </div>
    </div>
<div className="shopcategory-products">
  {all_product.map((item,i)=>{
    if(props.category===item.category){
return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    }
    else{
      return null;
    }
  })}
</div>
<div className='shopcategoty-loadmore'>
  Explore More

</div>
    </div>
  )
}

export default ShopCategory
