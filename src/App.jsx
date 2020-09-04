import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component
{
    render()
    {
        return(
            <BrowserRouter>
                <div className="app">

                    <header className="header">
                        <Navbar />
                    </header>

                    <main className="main">
                        <Route exact path='/' component={ Home } />
                        <Route path='/about' component={ About } />
                        <Route path='/contact' component={ Contact } />
                    </main>
                    
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
