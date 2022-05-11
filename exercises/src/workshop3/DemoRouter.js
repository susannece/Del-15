import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const DemoRouter = () => {

    return (
        <div className='container'>
        <Router>
            <Header />
            <Switch>
                   <Route exact path="/" component={Welcome} />
                   <Route path="/welcome" component={Welcome} />
                   <Route path="/home" component={Home} />
                   <Route path="/person" component={Person} />
                   <Route path="/about" component={About} />
            </Switch>
        </Router>
        </div>
    );
};

const Welcome = () => <h1>Welcome</h1>
const Home = () => <h1>Home</h1>
const Person = () => <h1>Person</h1>
const About = () => <h1>About</h1>
const NotFound = () => <h1>Not Found</h1>

const Header = () => {  
    
    return(
        <Fragment>
            <ul className='nav nav-pills nav-fill bg-dark text-light' >
                <li className='nav-item'><Link className='nav-link' to="/">Welcome</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/home">Home</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/person">Person</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
            </ul>
        </Fragment>
    );
};


export default DemoRouter