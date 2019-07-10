import React, {Component} from 'react';
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../Context'
import CartList from './CartList';

class Cart extends Component {
  render(){
    return (
      <section>
        
        <ProductConsumer>
          {value => {
            const {cart} = value;
            return cart.length  > 0 ? 
            <React.Fragment>
              <Title name="Your" title="Cart"/>
               <CartColumns />
               <CartList value={value}/>
            </React.Fragment>
             : <EmptyCart />
          }}
        </ProductConsumer>
      </section>
  );
}
}   

export default Cart;
