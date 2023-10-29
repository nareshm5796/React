import data from "./data"
import React,{ useState} from "react";


function App() { 
  useState(  );

  return <div >
            <header>
              <ul>
                <li>Home</li>
                <li>Contact</li>
              </ul>
            </header>
              <div className="App">
                {
                  data.map((eachobj)=>{
                    const {image, Name, KEY, price}= eachobj;
                    return <Card img = {image} fname ={Name} KEY = {KEY} rate= {price}/> 
                  })
                }
              </div>
          </div>
}

function Card(props){
  return(
    <div className="card">
      <div>
      <img className="card-img" src = {props.img} alt = "cake"/> 
      </div>
      <h5>{props.fname}</h5>
      <div>
      <h6> {props.rate} /- </h6>
      <div className="add-item">
        <button  className="btn1">-</button>
        <h6>0</h6>
        <button  className="btn1">+</button>
      </div>
      </div>
    </div>
  )
}


export default App;
