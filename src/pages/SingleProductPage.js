import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SingleProductImg from '../images/singleProductBcg.jpeg';
import { ProductConsumer } from '../context';
export default function singleProductPage() {
    return (
        <>
            <Hero img={SingleProductImg} title="Hello from single Product" />
            <ProductConsumer>
                {value => {
                    const { singleProduct, addToCart, Loadnig }  = value;
                    if (Loadnig) {
                        return <h1>product Loading ....</h1>
                    }
                    const { company, description, id, price, title, image } = singleProduct
                return<h3>{title}</h3>
                }}
            </ProductConsumer>
        </>
    )
}
