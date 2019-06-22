import React, {Component} from 'react';

const ProductContext = React.createContext();
// This is the context object which will provide two components
// A Provider and a Consumer.

class ProductProvider extends Component {
    render(){
        return (
            <ProductContext.Provider value="Hello from Context">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export  {ProductProvider, ProductConsumer};