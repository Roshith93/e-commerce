import React, {Component} from 'react';

class Product extends Component {

  render(){
    const {product,handleDetail} = this.props
    console.log(product);
    
    return (
          <ul><li>{product}</li></ul>
  );
}
}

export default Product;
