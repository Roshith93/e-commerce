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
        },() => {
            this.addTotals()
        })
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
    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count + 1;
        product.total = product.price * product.count
        this.setState(()=>{
            return{
                cart: [...tempCart]
            }
        },() => {
            this.addTotals()
        })
    };
    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count - 1;
        if(product.count === 0){
            this.removeItem(id)
        }
        else{
            product.total = product.price * product.count     
            this.setState(()=>{
                return{
                cart: [...tempCart]
            }
        },() => {
            this.addTotals()
        })
    }  
    };
    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        // console.log("tempcart", tempCart)
        tempCart = tempCart.filter(item => item.id !== id)
        // console.log("tempCart", tempCart)
        const index = tempProducts.indexOf(this.getItem(id))   
        console.log("get item",this.getItem(id))     
        console.log("index", index)     
        let removedProduct = tempProducts[index]
        console.log("removedProduct", removedProduct)
        removedProduct.inCart = false;
        removedProduct.price = 0;
        removedProduct.count = 0

        this.setState(() => {
            return{
                cart : [...tempCart],
                products: [...tempProducts]
            }
        },() => {
            this.addTotals();
        })
    };
    clearCart = () => {
        this.setState(() => {
            return{
                cart: []
            }, () => {
                this.setProducts();
                this.addTotals();
            }
        })
    };
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total)
        let tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(() => {
            return {
                cardSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    
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