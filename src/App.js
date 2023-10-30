import data from "./data"
import Card from "./card"
function App() { 
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



export default App;
