import data from "./data"
import Card from "./card"
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
          </div>
}



export default App;
