import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import {BrowserRouter, Router, Link, Redirect } from 'react-router-dom';
import Menu from './menu';

class Login extends Component{
    constructor(props){
        super(props)
      this.state={  
          uName:'',
        Password:'',
        data:''
    }
    }
    handleUName(e){
        this.setState({
            uName:e.target.value
        })
    }
    handlePassword(e){
      this.setState({
            Password:e.target.value
      })
    }
    handleSubmit=(e)=>{
    this.setState({
        data:this.state.uName=="admin" && this.state.Password=="admin"
    })
    }
    render(){
        return(
              <div>
                  
                 
                  
              <form onSubmit={this.handleSubmit} id="login">
              <tr>
              <p style={{display: this.state.data ?'none':'block'}}>UserName Or Password wrong</p>
              </tr>
              <tr>
                  <td>
              <label>UserName:</label></td>
             <td> <input type="text"  placeholder="Enter User Name" className="form-control" id="name" onChange={(e)=>{this.handleUName(e)}}/><br /></td>
            
             </tr>
             <tr>
             <td> <label>Password:</label></td>
             <td> <input type="password"  placeholder="Enter Password" className="form-control" id="pswd" onChange={(e)=>{this.handlePassword(e)}}/><br /></td>
              </tr>
              <tr>
              <td></td><td><button type="submit" value="Login" className="btn btn-primary" >Login</button>
              <button type="button" value="Cancel" className="btn btn-primary">Cancel</button></td>
             </tr>
              </form>
              </div>
        )
    }
}
export default Login;