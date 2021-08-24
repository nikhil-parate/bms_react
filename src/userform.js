import React, {
    Component
} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const API_URL1 = 'https://bmsnode.herokuapp.com/register'; 
//'http://localhost:3001/register';

class demo extends Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.myRef4 = React.createRef();
        this.state = {
            userName: "",
            email: "",
            phone: "",
            password: "",
            errors: {
                userName: "",
                email: "" ,
                phone: "" ,
                password: "",
              },
            touched: {
                userName: false,
                email: false,
                phone: false,
                password : false,
              },
        }
        
    }
    handle = async ({ target: { name, value } }) => {
        const errors = this.state.errors;
        switch (name) {
            case "userName": {
              if (!value) {
                errors[name] = "userName is empty";
              } else if(!isNaN(name)){
                errors[name] = "userName must be text";
              } else {
                errors[name] = "";  
              }
              break;
            }
            case "email": {
                if (!value) {
                  errors[name] = "email is empty";
                } else if(!isNaN(name)){
                  errors[name] = "email must be text";
                } else {
                  errors[name] = "";  
                }
                break;
              }
            case "phone": {
                if (!value) {
                  errors[name] = "phone number is empty";
                } else if(isNaN(name)){
                  errors[name] = "phone must be Number";
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
    routeChange() {
        let path = `/login`;
        this.props.history.push(path);
      }  
    submit = async (event) => {
        event.preventDefault();
        try {
            axios(API_URL1, { 
                method: 'POST',
                url: API_URL1,
                data : {
                  name: this.myRef1.current.value,
                  email: this.myRef2.current.value,
                  phone: this.myRef3.current.value,
                  password: this.myRef4.current.value
              }
              })
              .then((response)=>{
                if(!response.data.error) {
                  this.setState({success: "true"});
                  console.log(response.data.error, this.state.success)
                   this.routeChange() ;
                   toast.success('Successfully Registered.', {position: toast.POSITION.TOP_CENTER});
                }
                else{
                  toast.error(response.data.error);
                  console.log(response.data.error, {position: toast.POSITION.TOP_CENTER});
              }
              })   
        } catch (err) {
            console.log(err);
        }
};
       
    
    render() {
        return ( <>
              <form onSubmit = {this.submit} >
                <br /><br />
            <label > UserName <input ref = {this.myRef1} style={{marginLeft:"10px"}}
            type = "text" required
            value = {this.state.userName.value}
            name = "userName"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label >  <br />
             <label > email <input ref = {
                this.myRef2
            } style={{marginLeft:"45px"}}
            type = "text" required
            value = {
                this.state.email.value
            }
            name = "email"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label >  <br />
             <label > phone <input ref = {
                this.myRef3
            } style={{marginLeft:"36px"}}
            type = "number" required
            value = {
                this.state.phone.value
            }
            name = "phone"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label >  <br />
            <label > Password <input ref = {
                this.myRef4
            } style={{marginLeft:"13px"}}
            type = "text" required
            value = {
                this.state.password.value
            }
            name = "password"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label >  <br />
            <input type = "submit" style={{marginLeft:"300px", background:"#4cbb17", color: "white"}}
            value = "Register" />
            </form> 
            </>
        )
    }
}
 
 export default withRouter(demo);