import React from 'react'
import './RelatedProducts.css'
import data from '../Assists/data.js'
import Items from '../Items/Items.jsx'
const RealtedProducts = () => {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr/>
      <div className='relatedproducts-item'>
{data.map((item,i)=>{
    
    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

})}
      </div>
    </div>
  )
}

export default RealtedProducts
