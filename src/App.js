import logo from "./logo.svg";
import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";

const auth = getAuth(app);
function App() {
  return (
    <div className="App">
      <form>
        <input type="email" name="" id="" placeholder="Enter your email" />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
      </form>
    </div>
  );
}

export default App;
