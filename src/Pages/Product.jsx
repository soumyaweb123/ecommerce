import React, { useContext } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import {ShopContext} from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
// import all_product from '../Components/Assists/all_product';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RealtedProducts from '../Components/RelatedProducts/RealtedProducts';
const Product = () => {
  const {all_product} =useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id === Number(productId))
  console.group(productId);
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RealtedProducts/>
    </div>
  )
}

export default Product
