import React from 'react';
import ehr from './Ehr';
import web3 from './web3';



class Register extends React.Component{
  state = {
    address : '',
    message : ''
  }
  addP = async event => {
    
    event.preventDefault();
    const accounts= await web3.eth.getAccounts();
    this.setState({message:'Adding Patient....'});
    await ehr.methods.addPat(this.state.address).send({
      from : accounts[0], gas : '1000000'
    })
    alert('Patient Added Successfully!!!');
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
                      <input class="descr_input" type="text" onChange={ event => this.setState({address : event.target.value})}  /> 
                      <br></br>
                      <br></br>
                      <br></br>
                      <div className="block">
                      <input  type="image" src="data:image/jpeg;base64,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" alt="Submit" width="150px" height="150px"
                      onClick={this.addP}></input>
                      <p>Add Patient</p>
                      <h3>{this.state.message}</h3>
                    
            
                      </div>
                      </td>
                  </tr>
             
              </table>
              
              
          </div> 
    
        );
      }
    
}
export default Register;