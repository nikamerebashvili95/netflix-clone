import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import { Home, Browse, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/browse" element={<Browse />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
