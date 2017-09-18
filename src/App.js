import React, { Component } from 'react';
import Nav from './components/principal/Nav';
//import Footer from './components/principal/Footer';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom';




class App extends Component {
    render() {



  return (
            <div>
                <Nav/>
                <div >


                        <Routes/>

              
                    </div>
                </div>

        );
    }
}

export default App;
