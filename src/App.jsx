// import logo from './logo.svg';
import {MainBody, Left, Right} from './App.style.jsx'
import SearchBox from './components/SearchBox.jsx'

function App() {
  return (
      <MainBody>
        <Left>
          <div>
            <div style={{marginBottom: "20px"}}>
              <span style={{fontStyle: "Poppins", fontWeight: "normal", letterSpacing: "-0.05px",color: "#FFFFFF", opacity: "1", fontSize: "49px"}}>Hello, </span>
              <span style={{fontStyle: "Poppins", fontWeight: "bold", letterSpacing: "-0.04px", color: "#FFFFFF", opacity: "1", fontSize: "49px"}}>Emerald</span>
            </div>
            <p style={{marginBottom: "40px", opacity: "60%"}}>Welcome to your dashboard, kindly sort through the user base</p>
            <SearchBox/>
          </div>
        </Left>
        <Right/>
      </MainBody>
  );
}

export default App;
