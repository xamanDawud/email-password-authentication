import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth } from "firebase/auth";
import BootstrapForm from "./components/BootstrapForm/BootstrapForm";
import NormalFormValidation from "./components/NormalFormValidation";
import ReactBootstrapForm from "./components/ReactBootstrapForm/ReactBootstrapForm";
import app from "./firebase/firebase.init";

const auth = getAuth(app);
function App() {
  return (
    <div className="mx-auto align-center w-50">
      {/* <NormalFormValidation/> */}
      {/* <ReactBootstrapForm /> */}
      <BootstrapForm />
    </div>
  );
}

export default App;
