import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './pages/Search';
import Home from './pages/Home';
class App extends React.Component {
  render(){
    return (
    	<Router>
			{/* <Header/> */}
			<Home/>
			 {/* <Switch>
         	<Route path="/Home">
          	</Route>
          	<Route path="/search">
            	<Search/>
          	</Route>
          	<Route path="/">
        		</Route>
        	</Switch> */}
			{/* <Footer/> */}
    	</Router>
    );
  }
}

export default App;