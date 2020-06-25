import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import web3 from  './web3';
import ehr from './doctor';
import ipfs from './ipfs';

class App extends Component {
  state = { 
    ipfsHash:null,
    desc : '',
    addr : '',
    message : '',
    buffer : ''
  };

  captureFile =(event) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    let reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => this.convertToBuffer(reader)    
  };

  convertToBuffer = async(reader) => {
      const buffer = await Buffer.from(reader.result);
      this.setState({buffer});
  };

  handleClick = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    await ipfs.add(this.state.buffer, (err, ipfsHash) => {
      console.log(err,ipfsHash);
      this.setState({ ipfsHash:ipfsHash[0].hash });
	
   
console.log("Hash"+this.state.ipfsHash);
console.log("PatientAdd"+this.state.addr);
this.sendIPFS(accounts[0]);
this.setState({ message : 'EHR Updated!!'});
 // console.log("Messagw"+msg);
    //const message1 = await 
   
 });
 this.setState({ message : 'Updating EHR...'});
  };
  sendIPFS = async (accnt) => {
    const msg = await ehr.methods.updateEHR(this.state.addr, this.state.ipfsHash).send({
      from : accnt
    });
   };
  render() {
    return (
      <div class ="search_container">
            <p class ="search_title">
                Patient address
            </p>
            <input class="search_input" type="text" placeholder="Search" 
              addr = {this.state.addr}
              onChange = {event => this.setState({ addr : event.target.value })} /> 
            <p class ="search_title">
                    Patient details
                </p>
         
                
                <table align = "center">
                    <tr>
                        <td>
                           <input type = "file"  onChange = {this.captureFile}  />
                            </td>
                            </tr>

                    <tr>
                      <td>
                        <button class = "bt" onClick={this.handleClick}>
                        Submit
                        </button>
                        </td>
                    </tr>

                    <tr>
                      <td>
                        {this.state.message}
                      </td>
                    </tr>
                </table>
            </div>
    );
  }
}

export default App;
