import data from "./data"
import Card from "./card"
import Render1 from "./Render1";
import Formvalidation from "./Form_validation"
import Addining from "./Adding";
function App() { 
  return <div >
            <header>
              <ul>
                <li><button className="menu-btn">Home</button></li>
                <li><button className="menu-btn">Contact</button></li>
                <li><button className="menu-btn">Help</button></li>
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
             <div className="Container">
              <Render1/>
              <Formvalidation/>
              <div>
                <Addining/>
              </div>
              </div> 
              
          </div>
}



export default App;
