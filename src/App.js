import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Culture from './components/Culture/Culture';

function App() {
  return (
    <div className="App">
    
     <Router>
     <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/friends">
           <Friends></Friends>
         </Route>
         <Route path="/friend/:friendId">
           <FriendDetails></FriendDetails>
         </Route>
         <Route exact path="/about">
           <About></About>
         </Route>
         <Route exact path="/about/culture">
           <Culture></Culture>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
