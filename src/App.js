/*import logo from './logo.svg';*/
import './App.css';
import News from './Components/News';
import NavBar from './Components/NavBar';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import {Route} from "react-router-dom";

function App() {
  const apiKey=process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/"><News apiKey={apiKey} key="general" pageSize={10} country="in" category="general"></News></Route>
      <Route exact path="/business"><News apiKey={apiKey}   key="business" pageSize={10} country="in" category="business"></News></Route>
      <Route exact path="/entertainment"><News apiKey={apiKey}  key="entertainment" pageSize={10} country="in" category="entertainment"></News></Route>
      <Route exact path="/general"><News apiKey={apiKey}  key="general" pageSize={10} country="in" category="general"></News></Route>
      <Route exact path="/health"><News apiKey={apiKey}  key="health" pageSize={10} country="in" category="health"></News></Route>
      <Route exact path="/science"><News apiKey={apiKey}  key="science" pageSize={10} country="in" category="science"></News></Route>
      <Route exact path="/sports"><News apiKey={apiKey}  key="sports" pageSize={10} country="in" category="sports"></News></Route>
      <Route exact path="/technology"><News apiKey={apiKey}  key="technology" pageSize={10} country="in" category="technology"></News></Route>
      </Switch>
      </Router>
    </div>
  );
}


export default App;


