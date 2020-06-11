
import React, { Component } from 'react';
import "./App.css";

import Carte from "./carte";
import Footer from "./footer"
import Navbar from "./navbar"
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';


let listParfum=[
  {id:"1",title:"Givenchy Irresistible",image:"https://www.parfumsmoinscher.com/2188-43184-thickbox/very-irresistible-de-givenchy-eau-de-toilette-spray-75-ml-pour-femme.jpg",description:"parfum venue d'italie",price:"165",quantity:0,totalprice:0},

  {id:"2",title:"Escada Magnetism",image:"https://www.parfumsmoinscher.com/846-914-thickbox/escada-magnetism-de-escada-eau-de-parfum-spray-75-ml-pour-femme.jpg",description:"parfum venue d'italie",price:"206",quantity:0,totalprice:0},

  {id:"3",title:"Cerruti",image:"https://www.parfumsmoinscher.com/9-45414-thickbox/1881-de-nino-cerruti-eau-de-toilette-spray-100-ml-pour-femme.jpg",description:"parfum venue d'italie",price:"120",quantity:0,totalprice:0},

  {id:"4",title:"CK Shock One",image:"https://www.parfumsmoinscher.com/15927-46978-thickbox/ck-one-shock.jpg",description:"parfum venue d'italie",price:"130",quantity:0,totalprice:0},

  {id:"5",title:"La Parisienne",image:"https://www.parfumsmoinscher.com/12884-45987-thickbox/parisienne-by-yves-saint-laurent-for-women.jpg",description:"parfum venue d'italie",price:"60",quantity:0,totalprice:0},

  {id:"6",title:"Miss Dior",image:"https://www.news-parfums.com/23566-tm_large_default/miss-dior-eau-de-parfum.jpg",description:"La nouvelle Eau de Parfum Miss Dior dévoile la féminité d’un floral sensuel.",price:"360",quantity:0,totalprice:0,totalprice:0}]





class App extends Component {






state={
  listParfum:listParfum
}

/********************************fonction********************** */

IncrementQuantity = (id) => {
  let plus = this.state.listParfum[id].quantity++;
  if(plus>0){
    let total=this .state.listParfum.price*plus;
 
};
this.setState({listParfum})
  }
/*************************DECREMENT ************ */
DecrementQuantity = (id) => {
  let minus = this.state.listParfum[id].quantity--;
  this.setState({ listParfum });
};


/***************************price**************** */


/*********************fonction************* */
  render (){
    return (
    
      <div className="App">
           <Navbar/>
           <Zoom><h1>welcome to our store</h1></Zoom>
           <Flip left><h2>50% discount</h2></Flip>
           <Carte parfums={this.state.listParfum} increment={this.IncrementQuantity}  decrement={this.DecrementQuantity} somme={this.total} />
        
           <Footer/>
      </div>
    
    
      
     
  
  );
}
}
export default App;

