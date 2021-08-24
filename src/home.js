import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
class home extends Component {
    constructor(){
        super();
         this.routeChange1 = this.routeChange1.bind(this);
         this.routeChange2 = this.routeChange2.bind(this);
         this.routeChange3 = this.routeChange3.bind(this);
    }
     routeChange1() {
         console.log("you clicked login")
        let path = `/login`;
        this.props.history.push(path);
    }
    routeChange2() {
        let path = `/register`;
        this.props.history.push(path);
      }
    routeChange3() {
        let path = `/admin`;
        this.props.history.push(path);
    }  
    changeRoute1 = (prod)=> {
        console.log("cr")
        this.routeChange1();
    }
    changeRoute2 = (prod)=>{
          this.routeChange2();
    }
    changeRoute3 = (prod)=>{
        this.routeChange3();
  }
    render() {
        return(
            
                <>
                    <img src = "https://www.dqindia.com/wp-content/uploads/2016/03/bookmyshow.jpg" alt="Book My Show" align="right" width="800"/>
                     <Button onClick={()=>this.changeRoute1()}>Log In</Button>
                    <Button onClick={()=>this.changeRoute2()}>Register</Button>
                    <Button onClick={()=>this.changeRoute3()}>Admin</Button>
                </>
            
        )
    }
}
export default withRouter(home);