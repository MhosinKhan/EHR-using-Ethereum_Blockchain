import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import web3 from  './web3';
import ehr from './patient';
import ipfs from './ipfs';

class App extends Component {
  state = { 
    message : '',
    ipfsHash : ''
  };

  onEHR = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ message : 'Waiting for EHR retrieval ...'});
    console.log("Acc"+accounts[0]);
    const ehrmess = await ehr.methods.viewEHR().call({
      from : accounts[0]
    });
    console.log("Hash"+ehrmess);
    this.setState({ ipfsHash : ehrmess});
  }                             


  render() {
    return (
      <div class ="search_container">
        <h2 class ="search_title">Patient</h2>

        <table align="center">
            <tr>
                <td><button class = "bt" onClick = {this.onEHR}>Retrieve your EHR</button></td>
            </tr>
            <tr>
                <td><p class ="search_title">Here's your EHR : </p></td>
            </tr>
        </table>

        <table align="center" border="0" >
            <tr>
                <td rowspan="0" colspan="1">
                  <img src = {"https://ipfs.infura.io/ipfs/" + this.state.ipfsHash} width="500" 
       height="300"  />
                </td>
            </tr>
        </table>
    </div>
    );
  }
}

export default App;
