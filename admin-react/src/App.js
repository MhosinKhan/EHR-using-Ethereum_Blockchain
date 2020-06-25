import React from 'react';
import Register from './Register';
import AddDoctor from './AddDoctor';
import AssignP from './AssignP';
import HomePage from './Home';
import ehr from './Ehr';
import './App.css';

//import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
let admind='';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      admin: ''
    };
    
  }
 async componentDidMount() {
   
    admind = await ehr.methods.getAdmin().call();
   // this.setState ({ admin : admind});
    
  }
  login(){
    alert("Logged In as: "+admind);
  }
  
  render(){
  return (
  
   
    <Router>
    
     
    <div id="menu">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/addpatient">Add Patient</Link></li>
    <li><Link to="/adddoctor">Add Doctor</Link></li>
    <li><Link to="/assignD">Assign Doctor to Patient</Link></li>
  </ul>


     <hr/>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addpatient">
            <AddPatient />
          </Route>
          <Route path="/adddoctor">
            <About />
          </Route>
          <Route path="/assignD">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
function AddPatient() {
  return (
    <div>
      <Register />
    </div>
  );
}
function About() {
  return (
    <div>
      
      <AddDoctor />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
     <AssignP />
    </div>
  );
}

/*class App extends React.Component {

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome</h1>
      <Register />
      </header>
    </div>
  );
}
}*/
export default App;
