import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
// This is the context object which will provide two components
// A Provider and a Consumer.


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modal: false,
        modalProduct: detailProduct,
        cardSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    // taking the data from api/external medium and storing it in the state.
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            let singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products:tempProducts}
        })
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
        // Use index to find and update the array
        const tempProducts = [...this.state.products];
        const itemIndex = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[itemIndex];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {products:tempProducts, cart: [...this.state.cart, product]}
        },() => {console.log(this.state)})
    }
    isModalOpen = (id) => {
        const tempProducts = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: tempProducts,
                modal: true
            }
        })
    }
    isModalClose = () => {
        console.log("clicked")
        this.setState({
            modal: false
        })
        console.log(this.state.modal)
    }
    increment = id => console.log("inc");
    decrement = id => console.log("Dec");
    removeItem = id => console.log("removeItem");
    clearCart = id => console.log("clear Cart");
    
     componentDidMount(){
        this.setProducts();
    }
    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                isModalOpen: this.isModalOpen,
                isModalClose: this.isModalClose,
                increment: this.increment,
                decrement:this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export  {ProductProvider, ProductConsumer};