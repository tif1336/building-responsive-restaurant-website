import "./App.css"
import './style/landingpage.css'
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Category from "./components/Category"
import FAQ from "./components/FAQ"

function App() {
    return (
      <div>
        {/* intro section */}
        <div  className="myBG">
          <NavigationBar />
          <Intro/>
        {/* end of intro */}
        </div>
        <div>
            {/* Start of Category */}
            <h3 className="mySubMenu">Kategori</h3>
            <Category/>
            <h3 className="mySubMenu">Frequently Asked Question</h3>
        </div>
        <div className="customSpacing">   </div>
      </div>
      
    );
  }
  
export default App