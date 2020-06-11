import React from 'react';

import "./App.css";

function Carte(props) {
return (
  

<div class="lesCartes">
  
  {props.parfums.map((el,id)=>                
                                   
                                   <div className="carte"  key={id}>
                                         <h3 className="card-title">{el.title}</h3>
                                     
                                       <img className="imagecarte"  src={el.image} />
                                         <div  className="card-text">{el.description}</div>
                                            <b>{el.price} TND</b>
                                                  <center><div className=" count">
                                           <div> <button onClick={() => props.increment(id)}>+</button></div> 
                                           
                                             <div className="card-text">{el.quantity}</div>   
                                             <div> <button onClick={() => props. decrement(id)}>-</button></div> 
                                             </div></center>
                                            <div className="card-text">total :{el.totalprice} TND </div> 
                                            <a href="#" class="btn btn-primary">ajouter au panier</a>
                                                  </div>
  )}
  
  
  </div> 

)}

export default Carte;