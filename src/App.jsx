// import logo from './logo.svg';
import {MainBody, Left, Right} from './App.style.jsx'
import SearchBox from './components/SearchBox.jsx'
import CategoryBtn from './components/CategoryBtn'
import { FaUsers, FaMale, FaFemale } from "react-icons/fa";

function App() {
  return (
      <MainBody>
        <Left>
          <div>
            <div style={{marginBottom: "5px"}}>
              <span style={{fontStyle: "Poppins", fontWeight: "normal", letterSpacing: "-0.05px",color: "#FFFFFF", opacity: "1", fontSize: "49px"}}>Hello, </span>
              <span style={{fontStyle: "Poppins", fontWeight: "bold", letterSpacing: "-0.04px", color: "#FFFFFF", opacity: "1", fontSize: "49px"}}>Emerald</span>
            </div>
            <p style={{marginBottom: "40px", opacity: "60%"}}>Welcome to your dashboard, kindly sort through the user base</p>
            <SearchBox/>
            <h3 style={{marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}>Show Users</h3>
            <div className="button-area">
              <CategoryBtn icon={FaUsers} color="#F935A9"/>
              <CategoryBtn icon={FaMale} color="#30BBB5"/>
              <CategoryBtn icon={FaFemale} color="#7946C1"/>
            </div>
          </div>
        </Left>
        <Right/>
      </MainBody>
  );
}

export default App;
