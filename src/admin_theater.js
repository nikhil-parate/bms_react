import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import {FaStar} from 'react-icons/fa'; 
import { withRouter } from 'react-router-dom';
import {ContextStr} from './cart_context';
class pricing extends Component {
  static contextType = ContextStr;
  constructor() {
    super();
    this.state = {
         total: 0,
     }
  }
  delete = (prod)=> {
    console.log("component will get delete");
  }
  render () {
    const {setdel} = this.context;
         return(
           <>
           <ContextStr.Consumer>
    {
      (context)=> {
        return(
          <>
           {/* {console.log(context.cart,"ht")}
            {context.cart.map(({movie,price,val})=>console.log(movie,price,val))}  */}
             <br />
           <br />
           <div style={{textAlign:"center", background:"black", color:"white"}}>
             <br />
             <br />
             <h1 style={{fontSize:"350%"}}>Book My Show</h1>
             <p> Buy movie ticket of your choice.</p>
             <br />
             <br />
           </div>
           <br />
            <div style={{textAlign:"center"}}>
             <div class="row">
             {context.cart.map(({id,movie,price,val})=>

              <div  class="col" style={{border:"1px solid #D3D3D3"}}>
                <br />
                <img src= {val} height="200" width="300" alt="movie" />
                <br />
                <span style={{fontWeight:"bold", fontSize:"150%"}}>{movie}</span>
                <br />
                {(movie === "Avengers" || movie === "Avengers2") ? <><FaStar style={{color:"#FFD700"}}/><FaStar style={{color:"#FFD700"}}/><FaStar style={{color:"#FFD700"}}/><FaStar style={{color:"#FFD700"}}/><FaStar style={{color:"#FFD700"}}/> </>: " "}
               
                <br />
                <span>{price}</span>
                <br />
                 <Button onClick={()=>{this.delete();setdel(id);}}>"Delete"</Button>
                 <br />
                 <br />
              </div>
             )}
             </div>
             </div>
          </>
        )
      }
    }
    </ContextStr.Consumer>
            
           </>
         )
  }
}
export default withRouter(pricing);