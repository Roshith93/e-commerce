import React, {Component} from 'react';
import Product from './Product'
import Title from './Title';
import {storeProducts} from '../data'
import {ProductConsumer} from '../Context'

class ProductList extends Component {
  state={
    products: storeProducts
  }
  render(){
    console.log(this.state.products)
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
            <div className="row">
              <ProductConsumer>
                {(hello) => <h1>{hello}</h1>}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
        // <Product />
  );
}
}

export default ProductList;
