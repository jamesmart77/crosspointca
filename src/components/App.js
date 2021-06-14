import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Landing from '../pages/Landing';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {

  useEffect(() => {
    toast.info(`We are still under construction so please pardon our appearance 🤓 
    Send us an email if you would like to schedule an information session.`, {
      position: "bottom-right",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      });
  })

  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <Nav />
          <Switch>
            <Route path='/' component={Landing} />
          </Switch>
          <Footer />
        </main>
        
        <ToastContainer />
      </div> 
    </BrowserRouter>
  );
}
