import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/";
import Detail from "./pages/Detail";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link className="navLink" to="/">
            Characters
          </Link>
          <Link className="navLink" to="/locations">
            Location
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/char/:char_id" element={<Detail />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route
            path="/locations/:location_id"
            element={<LocationDetail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
