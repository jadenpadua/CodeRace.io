import React from 'react';
import ReactGA from 'react-ga';
import {BrowserRouter,Route} from 'react-router-dom'
import Suggestion from './components/Suggestion/Suggestion'
import Home from './components/Home/Home.js'

function initializeReactGA() {
  ReactGA.initialize('UA-166307178-2');
  ReactGA.pageview('/homepage');
}
initializeReactGA()

const App = () =>  {
  return(
    <BrowserRouter>
      <Route path = "/" exact component = {Home} />
      <Route path = "/suggestion" exact component={Suggestion} />
    </BrowserRouter>
  );
};
export default App;
