import React, { useContext } from 'react'
import { ShopContest } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Bredcrums from '../../Components/Breadcrums/Bredcrums';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import DescpritionBox from '../../Components/DescpritionBox/DescpritionBox';
import ReletedProduct from '../../Components/ReletedProduct/ReletedProduct';

function Products() {
  const {all_product}=useContext(ShopContest);
  const {productId}=useParams();
  const product= all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescpritionBox/>
      <ReletedProduct/>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Products
