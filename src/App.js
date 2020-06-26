import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Sidecart from './components/Sidecart';
import  Default from './pages/Default';
//custom Route
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CartPages = lazy(() => import('./pages/CartPages'));
const Products = lazy(() => import('./pages/Products'));
const SingleProductPage = lazy(() => import('./pages/SingleProductPage'));


class App extends Component {
  render() {
    return (
      <>
        {/*navbar,sidebar,cart,footer*/}
        <Navbar />
        <Sidebar />
        <Sidecart />
        <Suspense fallback={<p>...loading</p>}>

        <Switch>
            <Route path="/" exact render={(props) => <HomePage {...props} />} />
            <Route path="/about" render={(props) => <AboutPage {...props} />} />
            <Route path="/contact" render={(props) => <ContactPage {...props} />} />
            <Route path="/products" exact render={(props) => <Products {...props} />} />
            <Route path="/products/:id" render={(props) => <SingleProductPage {...props} />} />
            <Route path="/cart" render={(props) => <CartPages {...props} />} />
          <Route path="*" component={Default}/>
        </Switch>
        </Suspense>

        <Footer />

      </>
    );
  }
}

export default App;
