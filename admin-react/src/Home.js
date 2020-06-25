import React from 'react';
import web3 from './web3';
import ehr from './Ehr';
import './App.css';

class HomePage extends React.Component {
    state = {
        admin : ''
    }
    async componentDidMount() {
   
     const admind = await ehr.methods.getAdmin().call();
        this.setState ({ admin : admind});
        
      }
      render(){
          return(
              <div>
                  <h2 align="center">Logged in as :{this.state.admin}</h2>
              </div>
          );
      }
     
}
export default HomePage;