import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
// This is the context object which will provide two components
// A Provider and a Consumer.


class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    setProducts =() => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            let singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products:tempProducts}
        })
    }
    componentDidMount(){
        this.setProducts();
    }
    getItem = id => {
        return this.state.products.find(item => item.id === id)        
    }   
    handleDetail = (id) => {
        const product =  this.getItem(id)
        // this.setState(() => {
        //     return {detailProduct: product}
        // })
        this.setState({
            detailProduct: product
        })
    }
    addToCart = (id) => {
      
    }
    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export  {ProductProvider, ProductConsumer};