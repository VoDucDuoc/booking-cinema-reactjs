import React from 'react'
import Header from '../header'
import Footer from '../footer'

export default function UserTemplate(props) {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
