import { MapPin, Phone } from "react-feather";
import "./App.css";
import { Wrapper, Role } from "./Wrapper.styles";

function App() {
  return (
    <Wrapper>
      <div className="App">
        <header className="App-header">
          <div className="avatar" />
          <h1>TUYEN VU DUC</h1>
        </header>
        <Role>
          <span>Frontend Developer</span>
          <span>
            <MapPin size={12} />
            Ha Noi, Viet Nam
          </span>

          <span>
            <Phone size={12} />
            +84 975 128 596
          </span>
        </Role>
      </div>
    </Wrapper>
  );
}

export default App;
