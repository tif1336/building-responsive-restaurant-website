import "./App.css"
import './style/landingpage.css'
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Category from "./components/Category"
import FAQ from "./components/FAQ"
import Profile from "./components/Profile"

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
            <h3 className="mySubMenu">FAQ</h3>
            <Profile/>
        </div>
      </div>
      
    );
  }
  
export default App