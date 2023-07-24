import { Route , Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import logo from './logo.svg';
import './stylesheets/App.css';
import Home from './components/Header/Home';
import Signin from './components/Header/Signin';
import Signup from './components/Header/Signup';
import Yourfeed from './components/Yourfeed';
import NewArticle from './components/NewArticle';
import Settings from './components/Settings';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import TagsArticle from './components/TagsArticle';

function App() {

  let token = JSON.parse(localStorage.getItem("token"))
  return (
    <div className="App">
      <Header/>
      {
        token ? <Authenticated/> : <UnAuthenticated/>
      }
      
      
     
    </div>
  );
}

function UnAuthenticated () {


  return(
    <>
    <Switch>
    <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/signin">
          <Signin/>
        </Route>
        <Route exact path="/signup" >
          <Signup/>
        </Route>
        <Route path = "*">
       <NotFound/>
       </Route>
    </Switch>
    </>
  )
}


function Authenticated () {
  return(
    <>
    <Switch>
    <Route exact path="/">
          <Home/>
        </Route>
       
       <Route exact path="/yourfeed" >
         <Yourfeed/>
       </Route>

       <Route exact path="/newarticle" >
         <NewArticle/>
       </Route>

       <Route exact path="/settings" >
         <Settings/>
       </Route>

       <Route exact path="/profile" >
         <Profile/>
       </Route>


       {/* <Route path = "*">
        <h2>No Data</h2>
       </Route> */}

     </Switch>
    </>
  )
}

export default App;
