import React,{ useState} from "react";

function Card(props){
    const [count, setcount]= useState(0);
    const additem=()=>{
        setcount(count+1);
    };
    const removeitem =()=>{
        setcount(count-1);
        if (count===0){
            alert("add Item")
            setcount(0);
        }
    }

    return(
      <div className="card">
        <div>
        <img className="card-img" src = {props.img} alt = "cake"/> 
        </div>
        <h5>{props.fname}</h5>
        <div>
        <h6> {props.rate} /- </h6>
        <div className="add-item">
          <button  className="btn1" onClick={removeitem}>-</button>
          <h6>{count}</h6>
          <button  className="btn1" onClick={additem}>+</button>
        </div>
        </div>
      </div>
    )
  }

  export default Card;