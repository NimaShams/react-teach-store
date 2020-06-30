import React from 'react'
import HEro from '../components/Hero';
import contactImg from '../images/contactBcg.jpeg'
import Contact from '../components/ContactPage/Contact';
export default function ContactPage() {
    return (
        <>
            <HEro img={contactImg} title="contact page"/>
            <Contact/>

        </>
    )
}
