import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Landing from '../pages/Landing';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {

  useEffect(() => {
    toast.info(`Pardon us, we are still under construction 🤓 Click "Contact Us" to send 
    us an email to schedule an information session or for any questions.`, {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
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
