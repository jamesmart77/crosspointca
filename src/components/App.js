import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Landing from '../pages/Landing';
import Nav from '../components/Nav';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <Nav />
          <Switch>
            <Route path='/' component={Landing} />
          </Switch>
        </main>
      </div> 
    </BrowserRouter>
  );
}
