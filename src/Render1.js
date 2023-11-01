import React,{ useState} from "react";
function Render1(){
    const [showdata,setShowdata] = useState(false);
    const handler =()=>{
        setShowdata(!showdata);
    }
    return<div className="Render-block">
        <h1>Conditional rendering.</h1>
        <div>
            <button onClick={handler}>{showdata ? "hide" : "show"}</button>
            { showdata && (
                <div><Menu/></div>
            )}
        </div>
    </div>
}

function Menu(){
    return <div className="Menu-card">
        <ul className="Menu-card-ul">
            <li className="Menu-card-li"><button>Massage</button></li>
            <li className="Menu-card-li"><button>Help</button></li>
            <li className="Menu-card-li"><button>Support</button></li>
        </ul>
    </div>
}

export default Render1;