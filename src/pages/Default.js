import React from 'react'
import Hero from '../components/Hero';
import defultBcg from '../images/defaultBcg.jpeg'
import { Link } from 'react-router-dom';
export default function Default() {
    return (
        <>
            <Hero img={defultBcg} title="404" max="true">
                <h2 className="text-uppercase">page not found</h2>
                <Link to="/" className="main-link"
                 style={{marginTop:"2rem"}}>
                    return Home
                </Link>
            </Hero>
        </>
    )
}
