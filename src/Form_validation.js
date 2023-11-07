import { useState } from "react";

function Form_validation(){
    const [user_name,setUser_name]= useState();
    const [user_email,setUser_email]= useState();
    const [user_password,setUser_password]= useState();

    const userEmail=(e)=>{
        setUser_email(e.target.value)
    };
    const userPassword=(e)=>{
        setUser_password(e.target.value)
    };
    const data = []
    const  formhandle=(e)=>{
        e.preventDefault()
        let obj={
            name:user_name,
            email:user_email,
            psw:user_password
        };
        // console.log(obj.name) 
        data.push(obj)
        console.log(data)
    };
    const submit=()=>{
        alert("Submited")
    };
    // console.log(data);
    return <div>
    <form onSubmit={formhandle}>
    <div className="Log-in-form">
        <h2><u>Login</u></h2>
        <input  onChange={(e)=>(setUser_name(e.target.value))} value={user_name} type="text"  placeholder="User Name"></input>
        <input type="email"  placeholder="User Email"  onChange={userEmail} value={user_email}></input>
        <input type="password"  placeholder="Password" onChange={userPassword} value={user_password}></input>
    <div className="log-in-btn">
        <button onClick={submit}>Submit</button>
    </div>
    </div>
    </form>
    </div>
}
export default Form_validation;