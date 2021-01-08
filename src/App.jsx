// import logo from './logo.svg';
import {MainBody, Left, Right, RightHeader, RightFooter} from './App.style.jsx'
import SearchBox from './components/SearchBox.jsx'
import CategoryBtn from './components/CategoryBtn'
import { FaUsers, FaMale, FaFemale } from "react-icons/fa";
import CountryDropDown from './components/CountryDropDown.jsx';
import RadioBtn from './components/RadioBtn.jsx';

function App() {
  return (
      <MainBody>
        <Left>
          <div style={{width: "80%"}}>
            <div style={{marginBottom: "5px"}}>
              <span style={{fontStyle: "Poppins", fontWeight: "normal", letterSpacing: "-0.05px",color: "#FFFFFF", opacity: "1", fontSize: "49px"}}>Hello, </span>
              <span style={{fontStyle: "Poppins", fontWeight: "bold", letterSpacing: "-0.04px", color: "#FFFFFF", opacity: "1", fontSize: "49px"}}>Emerald</span>
            </div>

            <p style={{marginBottom: "40px", opacity: "60%"}}>Welcome to your dashboard, kindly sort through the user base</p>

            <SearchBox icoTop="1.5rem" icoLeft="1rem" icoSize="2rem" font="22px" leftPad="4rem" width="85%" height="75px" background="#3C3F54" color="#FFFFFF" radius="28px" placeholder="Find a user"/>
            <h3 style={{marginTop: "50px", marginBottom: "50px", opacity: "0.7"}}>Show Users</h3>

            <div className="button-area">
              <CategoryBtn icon={FaUsers} text="All Users" color="#F935A9"/>
              <CategoryBtn icon={FaMale} text="Male Users" color="#30BBB5"/>
              <CategoryBtn icon={FaFemale} text="Female Users" color="#7946C1"/>
            </div>
          </div>
        </Left>
          
        <Right>
          <RightHeader>
            <h1 style={{color: "#262A41", fontStyle: "Poppins", opacity: "1", marginBottom: "-5px"}}>All Users</h1>
            
            <p style={{fontStyle: "Poppins", letterSpacing: "-0.02px", color: "#262A41", opacity: "0.9",  marginBottom: "10px"}}>Filter by</p>

            <div className="filter-area">

              <SearchBox icoTop="0.8rem" icoLeft="0.7rem" icoSize="1rem" font="12px" leftPad="2rem" width="40%" height="40px" background="#E2E2EA" color="#262A41" radius="35px" placeholder="Find in list"/>

              <CountryDropDown/>
              
              <RadioBtn color="#30BBB5"/>
            </div>
           
          </RightHeader>

          <div style={{height: "80%"}}>
            
          </div>
          

          <RightFooter>
            hello
          </RightFooter>
        </Right>
      </MainBody>
  );
}

export default App;
