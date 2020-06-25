import React from 'react';
import ehr from './Ehr';
import web3 from './web3';

class AssignP extends React.Component{
    state = {
        addressP : '',
        addressD : '',
        message : ''
      }
      assigningDoc = async event => {
        
        event.preventDefault();
        const accounts= await web3.eth.getAccounts();
        this.setState({message:'Asigning Doctor to a patient....'});
        await ehr.methods.assignDoc(this.state.addressP,this.state.addressD).send({
         from : accounts[0], gas : '1000000'
        })
        alert('Doctor Assigned Successfully!!!');
        this.setState({message:''})
      }
    render() {
        return(
            <div class ="search_container">
              <table align = "center">
                  <tr>
                      <td>
                    
                      <br></br>
                      <div className="block">
                      <p class ="descr_title">
               Enter Doctor Address to assign
              </p>
              <input class="descr_input1" type="text"  onChange = { event => this.setState({addressD : event.target.value})}/> 
                    
                      <p class ="descr_title">
               Enter Patient Address 
              </p>
              <input class="descr_input1" type="text"  onChange = { event => this.setState({addressP : event.target.value})}/>   
              <br></br>
              <br></br>
              <br></br>
                   <button className="bttn" onClick = {this.assigningDoc}>Assign</button> 
                   <h3>{this.state.message}</h3>
            
                      </div>
                      </td>
                  </tr>
             
              </table>
              
              
        
    </div>
        );
      }
    
}
export default AssignP;