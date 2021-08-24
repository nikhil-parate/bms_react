import Form from './userform';
import Login from './login';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import History from './history';
import Home from './home';
import Theater from './theater';
import AdminTheater from './admin_theater';
import Admin from './admin';
import Seat from './seat';
import Pay from './payment';
import Cart from './cart_context';
function App() {
  return (
    <>
    <BrowserRouter style={{float:"right"}}>
      <History /> <br /><br />
     {/* <Link style={{fontSize:"20px", paddingRight:"2px", border:"2px solid black", background:"#4169e1", color:"whitesmoke"}} to="/login">Log In</Link> 
     <Link style={{fontSize:"20px", paddingRight:"2px", border:"2px solid black",  background:"#4169e1", color:"whitesmoke"}} to="/register">Register</Link> */}
     <Link style={{fontSize:"16px", padding:"6px 10px 10px 10px", borderRadius:"3px",  background:"#4169e1", color:"whitesmoke"}} to="/">Home</Link>
    <Switch>
    <Route  path="/login" >
    <Login />
    </Route>
    <Route exact path="/" render={()=><Home />}/>
    <Route path="/register">
      <Form />
    </Route>
    <Route path="/movies" render={()=><><Cart><Theater /></Cart></>} />
    <Route path="/admin-theater" render={()=><><Cart><AdminTheater /></Cart> </>} />
    <Route path="/admin" render={()=><Admin />} />
    <Route path="/ticket" render={()=><><Cart><Seat /></Cart> </>} />
    <Route path="/payment" render={()=><><Cart><Pay /></Cart> </>} />
    </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
