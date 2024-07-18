import Leftside from "../componets/Leftside";
import Navbar from '../componets/Navbar';
import Rightside from '../componets/Rightside';
function Home() {
    return (
      <div className="Home_container">
        <Navbar/>
        <div className="inside_homeconatiner">
        <Leftside/>
        <Rightside/>
        </div>
      </div>
    );
  }
  
  export default Home;