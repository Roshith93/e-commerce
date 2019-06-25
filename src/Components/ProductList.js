import React, {Component} from 'react';
import Product from './Product'
import Title from './Title';
import {ProductConsumer} from '../Context'

class ProductList extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
            <div className="row">
              <ProductConsumer>
                {(value) => value.products.map(value => <Product key={value.id} product={value} handleDetail={value.handleDetail}/>)}
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
