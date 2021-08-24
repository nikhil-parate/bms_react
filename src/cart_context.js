import { Component } from "react";
import { createContext } from "react";

export const ContextStr = createContext();
class cart extends Component {
  constructor(){
    super();
    this.state= {
      moviename : "",
      number: 0,
      price: "",
      sum : 0,
      total : 0,
      tax: 20,
      smile : 2,
      cart : [
        { 
          id : 1,
          movie: "Daredevil",
          price: 250,
          val : "https://terrigen-cdn-dev.marvel.com/content/prod/2x/daredevil_lob_crd_02.jpg",
        },
        {
          id : 2, 
         movie: "Deadpool",
         price:  210,
         val : "https://lumiere-a.akamaihd.net/v1/images/image_8c4aa72b.jpeg?region=0%2C0%2C800%2C1200",
        },
        {
          id : 3, 
         movie: "Avengers",
         price: 280,
         val : "https://flxt.tmsimg.com/assets/p8815512_p_v10_ap.jpg",
        },
        {
          id : 4, 
         movie: "Avengers 2",
         price: 300,
         val : "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
        },
        {
          id : 5, 
         movie: "Avengers 3",
         price: 250,
         val : "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg", 
        },
        {
          id : 6, 
         movie: "Avengers 4",
         price: 400,
         val : "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        },
        {
          id : 7, 
         movie: "Black Widow",
         price: 250,
         val : "https://images-na.ssl-images-amazon.com/images/I/914MHuDfMSL.jpg",
        },
        {
          id : 8, 
         movie: "Loki",
         price: 210  ,
         val : "https://cdn.mos.cms.futurecdn.net/d7vgkKkZkNAUwxffyNkt8k.jpg",
        }
      ]
    }
  }
  set =(data,name ) => {
    console.log(data);
   // let price = this.state.price;
    this.setState({price:data});
    this.setState({moviename:name});
    console.log(this.state.price,"context price");
  }
  setTotal= (count) => {
  let res = count * this.state.price  
  this.setState({total:res});
  res = res + this.state.tax + this.state.smile;
  this.setState({sum:res}); 
  this.setState({number:count});
  }
  setdel = (Id) => {
   console.log(Id,"cart");
   let cart = [...this.state.cart];
   cart = cart.filter(({id}) => id !== Id);
   this.setState({cart});
  }
  render() {
    return(
      <>
          <ContextStr.Provider value={{...this.state, set:this.set, setTotal:this.setTotal, setdel:this.setdel}}>
               {this.props.children}
          </ContextStr.Provider>
      </>
    )
  }
}

export default cart;