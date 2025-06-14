import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assists/remove.png';

const CartItems = () => {
  const {  getDefaultCartAmount ,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format'>
                {e.image && (
                  <img
                    src={e.image}
                    alt={e.name}
                    className='carticon-product-icon'
                  />
                )}
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>₹{e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="Remove"
                  width="25px"
                  onClick={() => removeFromCart(e.id)}
                  className='remove-icon'
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
                <div className='cartitems-total-item'>
<p>Subtotal</p>
<p>${ getDefaultCartAmount() }</p>
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                    <p>Shipping Fees</p>
                    <p>Free</p>
                    
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>${getDefaultCartAmount()}</h3>
                </div>
            </div>
            <button>
                PROCEED TO CHECKOUT
            </button>
        </div>
        <div className ="cartitems-promocode">
            <p>If you a promo code, Enter it here</p>
       <div className='cartitems-promobox'>
        <input type="text" placeholder='promo code'/>
        <button className='button' >Submit</button>
       </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
