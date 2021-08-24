import React, {
    Component
} from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
//import Theater from './theater';
const API_URL1 = 'https://bmsnode.herokuapp.com/admin-login';
//'http://localhost:3001/admin-login';

class demo extends Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.state = {
            email: "",
            password: "",
            errors: {
                email: "" ,
                password: "",
              },
            touched: {
                email: false,
                password : false,
              },
        }
        
    }
    routeChange() {
        let path = `/admin-theater`;
        this.props.history.push(path);
      }
    handle = async ({ target: { name, value } }) => {
        const errors = this.state.errors;
        switch (name) {
            case "email": {
                if (!value) {
                  errors[name] = "username is empty";
                } else if(!isNaN(name)){
                  errors[name] = "username must be text";
                } else {
                  errors[name] = "";  
                }
                break;
              } 
            case "password": {
              if (!value) {
                errors[name] = "password is empty";
              } else {
                errors[name] = "";
              }
              break;
            }
            default: {
                console.log("Hi");
            }
          }
          this.setState({ [name]: value, errors });

    }
    handleBlur = ({ target: { name } }) => {
        const touched = { ...this.state.touched };
        touched[name] = true;
        this.setState({ touched });
      };
     
    submit = async (event) => {
        event.preventDefault();
        let data= {
          email: this.myRef1.current.value,
          password: this.myRef2.current.value
        }
      
        try {
            fetch(API_URL1, { 
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
              })
              .then((response) =>{
                return response.json()
              }).then((body)=>{
                  if(!body.error){
                    this.routeChange() ;
                  }
                  else{
                    toast.error("wrong userid or password", {position: toast.POSITION.TOP_CENTER});
                      console.log(body.error);
                  }
                  //console.log(body.error);
              });   
        } catch (err) {
            console.log(err,"error is here");
        }
};
    
    render() {
        return ( <>
              <br /> <br />
              <h2 >Admin Login Page</h2>
              <form onSubmit = {this.submit} >
                  <br />< br />
              <label style={{paddingRight: "20px"}}> Email <input ref = {this.myRef1} 
            type = "text" required style={{marginLeft:"44px"}}
            value = {this.state.email.value}
            name = "email"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label >   <br />
            <label > Password <input ref = {
                this.myRef2
            }
            type = "text" required style={{marginLeft:"20px"}}
            value = {
                this.state.password.value
            }
            name = "password"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label >  <br />
            <input type = "submit"  style={{marginLeft:"300px", background:"#4cbb17", color: "white"}}
            value = "Login" />
            </form> 
            </>
        )
    }
}
 
 export default withRouter(demo);