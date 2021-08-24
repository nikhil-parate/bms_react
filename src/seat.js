import './seat.css';
import React, {Component} from 'react'
import {ContextStr} from './cart_context';
import SeatPicker from 'react-seat-picker'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
class seat extends Component {
  static contextType = ContextStr;
  constructor(){
    super();
  this.state = {
    loading: false,
    count: 0,
    price: 0,
    total: 0,
    str: "",
  }
  this.routeChange = this.routeChange.bind(this);
}
  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 1))
      console.log(`Added seat ${number}, row ${row}, id ${id}`)
      this.state.str += row + number + " ";
      addCb(row, number, id)
      let count = this.state.count;
      ++count;
      this.setState({ count })
      this.setState({ loading: false });
      console.log(this.state.count);
    })
  }
 
  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 1))
      console.log(`Removed seat ${number}, row ${row}, id ${id}`)
      removeCb(row, number)
      let count = this.state.count;
      --count;
      this.setState({ count })
      this.setState({ loading: false })
      console.log(this.state.count)
    })
  }
 
  routeChange() {
    let path = `/payment`;
    this.props.history.push(path);
  }
  changeRoute = (prod)=> {
    toast.info("You have selected: " + this.state.str + " seats", {position: toast.POSITION.TOP_CENTER});
    this.routeChange();
  }
  render() {
    const {setTotal} = this.context;
    const rows = [
      [{id: 1, number: 1}, {id: 2, number: 2}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Rogger'}, {id: 4, number: '4', orientation: 'west'}, null, {id: 5, number: 5}, {id: 6, number: 6}, null, null, null, null, null, {id: 7, number: 7}, {id: 8, number: 8}, null,{id: 9, number: 9,isReserved: true},{id: 10, number: 10}, null, {id: 11, number: 11}, {id: 12, number: 12}],
      [{id: 13, number: 1, isReserved: true, tooltip: 'Reserved by Matthias Nadler'}, {id: 14, number: 2, isReserved: true}, null, {id: 15, number: '3', isReserved: true, orientation: 'east'}, {id: 16, number: '4', orientation: 'west'}, null, {id: 17, number: 5}, {id: 18, number: 6},null, null, null, null, null,{id: 19, number: 7}, {id: 20, number: 8}, null,{id: 21, number: 9},{id: 22, number: 10}, null, {id: 23, number: 11}, {id: 24, number: 12}],
      [{id: 25, number: 1}, {id: 26, number: 2}, null, {id: 27, number: 3, isReserved: true, orientation: 'east'}, {id: 28, number: '4', orientation: 'west'}, null, {id: 29, number: 5}, {id: 30, number: 6},null, null, null, null, null,{id: 31, number: 7}, {id: 32, number: 8}, null,{id: 33, number: 9},{id: 34, number: 10}, null, {id: 35, number: 11}, {id: 36, number: 12,isReserved: true}],
      [{id: 37, number: 1}, {id: 38, number: 2}, null, {id: 39, number: 3, orientation: 'east'}, {id: 40, number: '4', orientation: 'west'}, null, {id: 41, number: 5}, {id: 42, number: 6},null, null, null, null, null,{id: 43, number: 7}, {id: 44, number: 8}, null,{id: 45, number: 9},{id: 46, number: 10}, null, {id: 47, number: 11}, {id: 48, number: 12}],
      [{id: 49, number: 1, isReserved: true}, {id: 50, number: 2, orientation: 'east'}, null, {id: 51, number: '3', isReserved: true}, {id: 52, number: '4', orientation: 'west'}, null,{id: 53, number: 5}, {id: 54, number: 6, isReserved: true},null, null, null, null, null,{id: 55, number: 7}, {id: 56, number: 8}, null,{id: 57, number: 9},{id: 58, number: 10,isReserved: true}, null, {id: 59, number: 11}, {id: 60, number: 12}]

    ]
    const {loading} = this.state;
    return (
        <> 
          <ContextStr.Consumer>
              {  (context)=> {
        return(
          <>
          {console.log(context.cart)}
          <div class="container" style={{ backgroundColor: "#242333", width:"50%", padding:"0px 50px 100px 50px"}}>
        <h1 class="screen" style={{alignItems:"center"}}>Screen This Way</h1>
        <div style={{marginTop: '50px'}}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={5}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{multiline: true}}
          />
        </div>
      </div>
      <p></p>
      <Button onClick = {()=> {this.changeRoute();setTotal(this.state.count);}} style={{marginLeft:"1070px"}}>checkout</Button>
      </>
        )
      }}
          </ContextStr.Consumer>
     
      </>
    )
    }
}
export default withRouter(seat);