
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/sign-in" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
