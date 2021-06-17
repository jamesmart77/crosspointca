import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Landing from '../pages/Landing';
import Contact from '../pages/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

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

  const analytics = Analytics({
    app: 'crosspoint-ca',
    plugins: [
      googleAnalytics({
        trackingId: 'UA-199622297-1'
      })
    ]
  })
  
  /* Track a page view */
  analytics.page()

  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <Nav />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/contactUs' component={Contact} />
          </Switch>
          <Footer />
        </main>
        
        <ToastContainer />
      </div> 
    </BrowserRouter>
  );
}
