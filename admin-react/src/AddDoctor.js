import React from 'react';

import ehr from './Ehr';
import web3 from './web3';

class AddDoctor extends React.Component{
    state = {
        address : '',
        message : ''
      }
      addDoctor = async event => {
        
        event.preventDefault();
        const accounts= await web3.eth.getAccounts();
        this.setState({message:'Adding Doctor....'});
        await ehr.methods.addDoc(this.state.address).send({
          from : accounts[0], gas : '1000000'
        })
        alert('Doctor Added Successfully!!!');
        this.setState({message:''})
      }
    render() {
        return(
          <div class ="search_container">
               
          <p class ="descr_title">
               Enter Address
              </p>
       
              
              <table align = "center">
                  <tr>
                      <td>
                      <input class="descr_input" type="text" onChange = { event => this.setState({address : event.target.value})} /> 
                      <br></br>
                      <br></br>
                      <br></br>
                      <div className="block">
                      <input  type="image" src="data:image/png;base64,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" alt="Submit" width="150px" height="150px"
                      onClick = {this.addDoctor}></input>
                      <p>Add Doctor</p>
                      <h3>{this.state.message}</h3>
                    
            
                      </div>
                      </td>
                  </tr>
             
              </table>
              
              
          </div> 
    
        );
      }
    
}
export default AddDoctor;