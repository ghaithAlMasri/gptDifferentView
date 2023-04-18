import React from 'react'
import { Footer, Blog, Possibilities, Features, WhatAyn, Header } from './containers'
import { Cta, Brand, Navbar } from './components'
import './App.css'


const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatAyn />
            <Features />
            <Possibilities />
            <Cta />
            <Blog />
            <Footer />

        </div>

    )
}

export default App
