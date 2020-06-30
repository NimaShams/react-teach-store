import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featuresd';
export default function HomePage() {
    return (
        <>
        <Hero title="awesome gadgets"  max="true">
            <Link to="/products"
            className="main-link"
            style={{margin:'2rem'}}>
                Our Product
            </Link>
        </Hero>
        <Services/>
        <Featured/>
        </>
    )
}
