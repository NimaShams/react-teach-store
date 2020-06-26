import React, { Component, createContext } from 'react'

const ProductContext = createContext();

class ProductProvider extends Component {
    state={
        sideBarOpen:false,
        cartOpen:false,
        cartItems: 0
    }
    //handelsidebar
    handleSidebar= () =>{
        this.setState({sideBarOpen:!this.state.sideBarOpen})
    }
    //handle cart
    handleCart= () =>{
        this.setState({cartOpen:!this.state.sideBarOpen})
    }
    //colse cart 
    closeCart = () =>{
        this.setState({cartOpen:false})
    }
    //open
    openCart = () =>{
        this.setState({cartOpen:true })
    }
    render() {
        return (
            <ProductProvider 
            value={{
                ...this.state,
                handleSidebar : this.handleSidebar ,
                 handleCart : this.handleCart ,
                 closeCart : this.closeCart ,
                 openCart : this.openCart}}>
                {this.props.children}
            </ProductProvider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };