import React, {Component} from "react";
import {ContextStr} from './cart_context';
import {Button} from 'react-bootstrap';
class payment extends Component {
    static contextType = ContextStr;
    constructor() {
        super();
        this.state = {
            total: 0,
        }
    }
    render() {
        return (
            <>
              <ContextStr.Consumer>
                  {  (context)=> {
            return(
              <><br />
              <br />
              <br />
              <div style={{background:"#00A4CCFF"}}>
                 <p style={{paddingLeft:"450px", color:"#F95700FF", fontWeight:"bold", fontSize:"50px"}}>{context.moviename}</p>
                 <p style={{paddingLeft:"450px", color:"#F95700FF", fontWeight:"bold", foneSize:"20px"}}>{context.number} Box Office</p>
                 <p style={{paddingLeft:"450px", color:"#F95700FF", fontWeight:"bold", foneSize:"20px"}}>sub-total: ₹ {context.total} <br /> + <br />internet handling fees: ₹ {context.tax} <br /> + <br /> contribution to book smile: ₹ {context.smile}</p>
                 </div>
                 <Button style={{marginLeft:"1070px"}}>Pay ₹{context.sum}</Button>
              </>
        )
      }}
          </ContextStr.Consumer>
     
      </>
    )
    }
}
export default payment;